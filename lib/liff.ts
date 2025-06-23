import liff from '@line/liff';

export type LiffProfile = {
  userId: string;
  displayName: string;
  pictureUrl?: string;
  statusMessage?: string;
  email?: string;
};

class LiffService {
  private static instance: LiffService;
  private isInitialized = false;

  private constructor() {}

  static getInstance(): LiffService {
    if (!LiffService.instance) {
      LiffService.instance = new LiffService();
    }
    return LiffService.instance;
  }

  async initialize(): Promise<void> {
    if (this.isInitialized) return;

    // Check if LIFF_ID is configured
    const liffId = process.env.NEXT_PUBLIC_LIFF_ID;
    if (!liffId || liffId.trim() === '') {
      console.warn('LIFF_ID not configured, LINE login disabled');
      throw new Error('LIFF_ID not configured');
    }

    try {
      await liff.init({
        liffId: liffId,
        withLoginOnExternalBrowser: true,
      });
      this.isInitialized = true;
      console.log('LIFF initialization succeeded');
    } catch (error) {
      console.error('LIFF initialization failed', error);
      throw error;
    }
  }

  async login(): Promise<void> {
    try {
      if (!this.isInitialized) await this.initialize();
      if (!liff.isLoggedIn()) {
        // Redirect to callback page after LINE login
        // ใช้ window.location.origin สำหรับ local development
        const baseUrl = window.location.origin;
        const redirectUri = `${baseUrl}/auth/callback`;
        
        liff.login({
          redirectUri: redirectUri
        });
      }
    } catch (error) {
      console.error('LIFF login failed:', error);
      throw new Error('LINE login is not available');
    }
  }

  async logout(): Promise<void> {
    try {
      if (!this.isInitialized) await this.initialize();
      if (liff.isLoggedIn()) {
        liff.logout();
      }
    } catch (error) {
      console.error('LIFF logout failed:', error);
    }
  }

  async getProfile(): Promise<LiffProfile | null> {
    try {
      if (!this.isInitialized) await this.initialize();
      if (!liff.isLoggedIn()) return null;

      const profile = await liff.getProfile();
      const email = liff.getDecodedIDToken()?.email;

      return {
        userId: profile.userId,
        displayName: profile.displayName,
        pictureUrl: profile.pictureUrl,
        statusMessage: profile.statusMessage,
        email,
      };
    } catch (error) {
      console.error('Error getting LIFF profile', error);
      return null;
    }
  }

  isLoggedIn(): boolean {
    try {
      return this.isInitialized && liff.isLoggedIn();
    } catch (error) {
      return false;
    }
  }

  isInClient(): boolean {
    try {
      return this.isInitialized && liff.isInClient();
    } catch (error) {
      return false;
    }
  }

  isAvailable(): boolean {
    const liffId = process.env.NEXT_PUBLIC_LIFF_ID;
    return !!(liffId && liffId.trim() !== '');
  }
}

export const liffService = LiffService.getInstance(); 
"use client"

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, Calculator, User, Calendar } from 'lucide-react';
import { NumerologyInput, NumerologyProfile } from '@/lib/numerology/types';
import { calculateNumerologyProfile } from '@/lib/numerology/calculator';

// Form validation schema
const numerologySchema = z.object({
  fullName: z
    .string()
    .min(2, 'ชื่อต้องมีอย่างน้อย 2 ตัวอักษร')
    .max(50, 'ชื่อต้องไม่เกิน 50 ตัวอักษร')
    .regex(/^[a-zA-Z\s\.]+$/, 'กรุณาใช้ตัวอักษรภาษาอังกฤษเท่านั้น'),
  dateOfBirth: z
    .string()
    .min(1, 'กรุณาเลือกวันเกิด')
    .regex(/^\d{4}-\d{2}-\d{2}$/, 'รูปแบบวันที่ไม่ถูกต้อง')
    .refine((date) => {
      if (!date) return false;
      const parsedDate = new Date(date);
      const now = new Date();
      const minDate = new Date('1900-01-01');
      return parsedDate >= minDate && parsedDate <= now && !isNaN(parsedDate.getTime());
    }, 'วันเกิดต้องอยู่ระหว่างปี 1900 ถึงปัจจุบัน')
});

type NumerologyFormData = z.infer<typeof numerologySchema>;

interface NumerologyFormProps {
  onResult: (profile: NumerologyProfile, dateOfBirth?: string, fullName?: string) => void;
  onError?: (error: string) => void;
  className?: string;
  defaultValues?: Partial<NumerologyFormData>;
}

export function NumerologyForm({ 
  onResult, 
  onError,
  className = "",
  defaultValues
}: NumerologyFormProps) {
  const [isCalculating, setIsCalculating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    watch
  } = useForm<NumerologyFormData>({
    resolver: zodResolver(numerologySchema),
    defaultValues: {
      ...defaultValues
    },
    mode: 'onChange'
  });

  const watchedName = watch('fullName');
  const watchedDate = watch('dateOfBirth');

  const onSubmit = async (data: NumerologyFormData) => {
    setIsCalculating(true);
    setError(null);

    try {
      const input: NumerologyInput = {
        fullName: data.fullName.trim(),
        dateOfBirth: data.dateOfBirth
      };

      const profile = calculateNumerologyProfile(input);
      onResult(profile, data.dateOfBirth, data.fullName);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'เกิดข้อผิดพลาดในการคำนวณ';
      setError(errorMessage);
      onError?.(errorMessage);
    } finally {
      setIsCalculating(false);
    }
  };

  const handleReset = () => {
    reset();
    setError(null);
  };

  // Quick example buttons
  const setExample = (example: 'john' | 'mary') => {
    const examples = {
      john: {
        fullName: 'John Smith',
        dateOfBirth: '1990-12-25'
      },
      mary: {
        fullName: 'Mary Johnson',
        dateOfBirth: '1985-06-15'
      }
    };

    reset(examples[example]);
  };

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="flex items-center text-xl">
          <Calculator className="h-6 w-6 mr-2" />
          คำนวณเลขศาสตร์
        </CardTitle>
        <CardDescription>
          กรอกข้อมูลของคุณเพื่อรับการวิเคราะห์เลขศาสตร์ที่ครบถ้วน
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Quick Examples */}
        <div className="flex flex-wrap gap-2">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => setExample('john')}
            className="text-xs"
          >
            ตัวอย่าง: John Smith
          </Button>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => setExample('mary')}
            className="text-xs"
          >
            ตัวอย่าง: Mary Johnson
          </Button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Full Name Input */}
          <div className="space-y-2">
            <Label htmlFor="fullName" className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              ชื่อเต็ม (ภาษาอังกฤษ) *
            </Label>
            <Input
              id="fullName"
              type="text"
              placeholder="เช่น John Smith"
              {...register('fullName')}
              className={errors.fullName ? 'border-red-500' : ''}
            />
            {errors.fullName && (
              <p className="text-sm text-red-500">{errors.fullName.message}</p>
            )}
            <p className="text-xs text-muted-foreground">
              ใช้ชื่อที่ปรากฏในเอกสารทางการ เช่น หนังสือเดินทาง บัตรประชาชน
            </p>
          </div>

          {/* Date of Birth Input */}
          <div className="space-y-2">
            <Label htmlFor="dateOfBirth" className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              วันเกิด *
            </Label>
            <Input
              id="dateOfBirth"
              type="date"
              {...register('dateOfBirth')}
              className={errors.dateOfBirth ? 'border-red-500' : ''}
            />
            {errors.dateOfBirth && (
              <p className="text-sm text-red-500">{errors.dateOfBirth.message}</p>
            )}
          </div>



          {/* Error Display */}
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {/* Preview */}
          {watchedName && watchedDate && (
            <div className="p-4 bg-muted/50 rounded-lg">
              <h4 className="font-semibold text-sm mb-2">ตัวอย่าง:</h4>
              <p className="text-sm">
                <span className="font-medium">ชื่อ:</span> {watchedName}
              </p>
              <p className="text-sm">
                <span className="font-medium">วันเกิด:</span> {new Date(watchedDate).toLocaleDateString('th-TH')}
              </p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
                      <Button
            type="submit"
            disabled={isCalculating || Object.keys(errors).length > 0 || !watchedName || !watchedDate}
            className="flex-1"
          >
              {isCalculating ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  กำลังคำนวณ...
                </>
              ) : (
                <>
                  <Calculator className="h-4 w-4 mr-2" />
                  คำนวณเลขศาสตร์
                </>
              )}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={handleReset}
              disabled={isCalculating}
            >
              รีเซ็ต
            </Button>
          </div>
        </form>

        {/* Information */}
        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <h4 className="font-semibold text-sm mb-2 text-blue-600">💡 ข้อมูลสำคัญ</h4>
          <ul className="text-xs text-blue-600 space-y-1">
            <li>• ใช้ชื่อภาษาอังกฤษที่ปรากฏในเอกสารทางการ</li>
            <li>• วันเกิดจะใช้ปฏิทินสากล (คริสต์ศักราช)</li>
            <li>• การคำนวณใช้ระบบ Pythagorean Numerology</li>
            <li>• ผลลัพธ์จะแสดงตัวเลขหลักและความหมายที่ละเอียด</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}

// Simplified version for quick calculations
interface QuickNumerologyFormProps {
  onResult: (profile: NumerologyProfile) => void;
  className?: string;
}

export function QuickNumerologyForm({ onResult, className = "" }: QuickNumerologyFormProps) {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [isCalculating, setIsCalculating] = useState(false);

  const handleQuickCalculate = async () => {
    if (!name.trim() || !date) return;

    setIsCalculating(true);
    try {
      const profile = calculateNumerologyProfile({
        fullName: name.trim(),
        dateOfBirth: date
      });
      onResult(profile);
    } catch (error) {
      console.error('Calculation error:', error);
    } finally {
      setIsCalculating(false);
    }
  };

  return (
    <div className={`flex flex-col sm:flex-row gap-3 p-4 border rounded-lg ${className}`}>
      <Input
        placeholder="ชื่อเต็ม (ภาษาอังกฤษ)"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="flex-1"
      />
      <Input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="flex-1"
      />
      <Button
        onClick={handleQuickCalculate}
        disabled={!name.trim() || !date || isCalculating}
        className="whitespace-nowrap"
      >
        {isCalculating ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          'คำนวณ'
        )}
      </Button>
    </div>
  );
} 
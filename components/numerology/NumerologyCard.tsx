"use client"

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { 
  Calculator, 
  Heart, 
  User, 
  Star, 
  Calendar,
  Sun,
  Sparkles,
  Target,
  TrendingUp
} from 'lucide-react';
import { NumerologyResult, LifePathResult, ExpressionResult, HeartDesireResult, PersonalityResult, PersonalCycleResult } from '@/lib/numerology/types';

// Icon mapping for different numerology types
const ICON_MAP = {
  life_path: Heart,
  expression: Target,
  heart_desire: Star,
  personality: User,
  personal_year: Calendar,
  personal_month: Calendar,
  personal_day: Calendar,
  sun_number: Sun,
  talent_number: Sparkles,
  maturity_number: TrendingUp,
  default: Calculator
};

// Color mapping for different numbers
const COLOR_MAP: Record<number, string> = {
  1: 'bg-red-500',
  2: 'bg-orange-500',
  3: 'bg-yellow-500',
  4: 'bg-green-500',
  5: 'bg-blue-500',
  6: 'bg-indigo-500',
  7: 'bg-purple-500',
  8: 'bg-pink-500',
  9: 'bg-amber-500',
  11: 'bg-gradient-to-r from-silver-400 to-gray-500',
  22: 'bg-gradient-to-r from-gold-400 to-yellow-600',
  33: 'bg-gradient-to-r from-emerald-400 to-green-600'
};

interface NumerologyCardProps {
  result: NumerologyResult | LifePathResult | ExpressionResult | HeartDesireResult | PersonalityResult | PersonalCycleResult;
  showDetails?: boolean;
  compact?: boolean;
  className?: string;
}

export function NumerologyCard({ 
  result, 
  showDetails = true, 
  compact = false,
  className = "" 
}: NumerologyCardProps) {
  const getIcon = () => {
    if ('type' in result) {
      const IconComponent = ICON_MAP[result.type] || ICON_MAP.default;
      return <IconComponent className="h-5 w-5" />;
    }
    return <Calculator className="h-5 w-5" />;
  };

  const getNumberColor = (num: number) => {
    return COLOR_MAP[num] || 'bg-gray-500';
  };

  const isExtendedResult = (result: any): result is LifePathResult | ExpressionResult | HeartDesireResult | PersonalityResult => {
    return 'type' in result && ['life_path', 'expression', 'heart_desire', 'personality'].includes(result.type);
  };

  const isPersonalCycleResult = (result: any): result is PersonalCycleResult => {
    return 'type' in result && ['personal_year', 'personal_month', 'personal_day'].includes(result.type);
  };

  if (compact) {
    return (
      <Card className={`hover:shadow-md transition-shadow ${className}`}>
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {getIcon()}
              <div>
                <h3 className="font-semibold text-sm">{result.description}</h3>
                <p className="text-xs text-muted-foreground">{result.meaning}</p>
              </div>
            </div>
            <div className={`w-12 h-12 rounded-full ${getNumberColor(result.number)} flex items-center justify-center text-white font-bold text-lg`}>
              {result.number}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={`hover:shadow-lg transition-all duration-300 ${className}`}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {getIcon()}
            <div>
              <CardTitle className="text-lg">{result.description}</CardTitle>
              <CardDescription className="text-sm">
                {'type' in result ? getTypeDescription(result.type) : 'การคำนวณเลขศาสตร์'}
              </CardDescription>
            </div>
          </div>
          <div className={`w-16 h-16 rounded-full ${getNumberColor(result.number)} flex items-center justify-center text-white font-bold text-2xl shadow-lg`}>
            {result.number}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Main meaning */}
        <div className="p-4 bg-muted/50 rounded-lg">
          <p className="text-sm leading-relaxed">{result.meaning}</p>
        </div>

        {/* Calculation details */}
        {showDetails && (
          <div className="space-y-3">
            <Separator />
            
            <div>
              <h4 className="font-semibold text-sm mb-2 flex items-center">
                <Calculator className="h-4 w-4 mr-2" />
                วิธีการคำนวณ
              </h4>
              <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md">
                <code className="text-xs font-mono">{result.calculation}</code>
              </div>
            </div>

            {/* Extended information for specific types */}
            {isExtendedResult(result) && (
              <div className="space-y-3">
                {/* Life Path specific */}
                {result.type === 'life_path' && (
                  <>
                    <div>
                      <h4 className="font-semibold text-sm mb-2 text-green-600">🌟 โอกาส</h4>
                      <div className="flex flex-wrap gap-1">
                        {result.opportunities.map((opportunity, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {opportunity}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2 text-orange-600">⚠️ ความท้าทาย</h4>
                      <div className="flex flex-wrap gap-1">
                        {result.challenges.map((challenge, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {challenge}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {/* Expression specific */}
                {result.type === 'expression' && (
                  <>
                    <div>
                      <h4 className="font-semibold text-sm mb-2 text-blue-600">🎯 เป้าหมาย</h4>
                      <div className="flex flex-wrap gap-1">
                        {result.goals.map((goal, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {goal}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2 text-purple-600">✨ พรสวรรค์</h4>
                      <div className="flex flex-wrap gap-1">
                        {result.talents.map((talent, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {talent}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {/* Heart's Desire specific */}
                {result.type === 'heart_desire' && (
                  <div className="space-y-2">
                    <div className="p-3 bg-pink-50 dark:bg-pink-900/20 rounded-md">
                      <h4 className="font-semibold text-sm mb-1 text-pink-600">💖 แรงจูงใจภายใน</h4>
                      <p className="text-sm">{result.innerMotivation}</p>
                    </div>
                    <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-md">
                      <h4 className="font-semibold text-sm mb-1 text-blue-600">🔮 ความปรารถนาของจิตวิญญาณ</h4>
                      <p className="text-sm">{result.soulUrge}</p>
                    </div>
                  </div>
                )}

                {/* Personality specific */}
                {result.type === 'personality' && (
                  <div className="space-y-2">
                    <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-md">
                      <h4 className="font-semibold text-sm mb-1 text-indigo-600">👤 บุคลิกภาพภายนอก</h4>
                      <p className="text-sm">{result.outerPersonality}</p>
                    </div>
                    <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-md">
                      <h4 className="font-semibold text-sm mb-1 text-green-600">✨ ความประทับใจแรก</h4>
                      <p className="text-sm">{result.firstImpression}</p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Personal Cycle specific */}
            {isPersonalCycleResult(result) && (
              <div className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-md">
                    <h4 className="font-semibold text-sm mb-1 text-yellow-600">⚡ พลังงาน</h4>
                    <p className="text-sm">{result.energy}</p>
                  </div>
                  <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-md">
                    <h4 className="font-semibold text-sm mb-1 text-green-600">💡 คำแนะนำ</h4>
                    <p className="text-sm">{result.advice}</p>
                  </div>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-md">
                  <h4 className="font-semibold text-sm mb-1 text-blue-600">📅 ช่วงเวลา</h4>
                  <p className="text-sm">{result.period}</p>
                </div>
              </div>
            )}

            {/* Raw sum information */}
            {result.rawSum && result.rawSum !== result.number && (
              <div className="text-xs text-muted-foreground">
                <span className="font-medium">ผลรวมเริ่มต้น:</span> {result.rawSum}
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function getTypeDescription(type: string): string {
  const descriptions = {
    life_path: 'เส้นทางชีวิตหลัก',
    expression: 'การแสดงออกและเป้าหมาย',
    heart_desire: 'ความปรารถนาภายใน',
    personality: 'บุคลิกภาพที่แสดงออก',
    personal_year: 'พลังงานประจำปี',
    personal_month: 'พลังงานประจำเดือน',
    personal_day: 'พลังงานประจำวัน'
  };
  
  return descriptions[type as keyof typeof descriptions] || 'การคำนวณเลขศาสตร์';
}

// Additional component for displaying multiple cards in a grid
interface NumerologyGridProps {
  results: (NumerologyResult | LifePathResult | ExpressionResult | HeartDesireResult | PersonalityResult | PersonalCycleResult)[];
  compact?: boolean;
  columns?: 1 | 2 | 3 | 4;
  showDetails?: boolean;
  className?: string;
}

export function NumerologyGrid({ 
  results, 
  compact = false, 
  columns = 2, 
  showDetails = true,
  className = "" 
}: NumerologyGridProps) {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-4 ${className}`}>
      {results.map((result, index) => (
        <NumerologyCard
          key={index}
          result={result}
          compact={compact}
          showDetails={showDetails}
        />
      ))}
    </div>
  );
}

// ลบ ConfidenceScore component ออกแล้ว 
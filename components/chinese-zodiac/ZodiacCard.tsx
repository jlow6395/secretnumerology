/**
 * Chinese Zodiac Card Component
 * Simple zodiac card for displaying Chinese zodiac information
 */

'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChineseZodiacResult } from '@/lib/chinese-zodiac/core';

interface ZodiacCardProps {
  result: ChineseZodiacResult;
  className?: string;
}

export default function ZodiacCard({ result, className = '' }: ZodiacCardProps) {
  return (
    <Card className={`overflow-hidden ${className}`}>
      <CardHeader className="text-center">
        <div className="text-6xl mb-2">{result.emoji}</div>
        <CardTitle className="text-2xl">
          {result.elementTh}{result.animalTh}
        </CardTitle>
        <p className="text-muted-foreground">
          {result.description}
        </p>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* บุคลิกภาพ */}
        <div>
          <h4 className="font-semibold mb-2 text-blue-600">🌟 บุคลิกภาพ</h4>
          <div className="flex flex-wrap gap-2">
            {result.personality.map((trait: string, index: number) => (
              <Badge key={index} variant="secondary" className="text-sm">
                {trait}
              </Badge>
            ))}
          </div>
        </div>

        {/* ความเข้ากันได้ */}
        <div>
          <h4 className="font-semibold mb-2 text-pink-600">💕 ความเข้ากันได้</h4>
          <div className="space-y-2">
            <div className="text-sm">
              <span className="font-medium text-green-600">ดีที่สุด:</span>
              <span className="ml-2">{result.compatibility.best.join(', ')}</span>
            </div>
            <div className="text-sm">
              <span className="font-medium text-blue-600">ดี:</span>
              <span className="ml-2">{result.compatibility.good.join(', ')}</span>
            </div>
            <div className="text-sm">
              <span className="font-medium text-orange-600">ระวัง:</span>
              <span className="ml-2">{result.compatibility.challenging.join(', ')}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 
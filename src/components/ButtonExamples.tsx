import React from 'react';
import { Button } from './Button';

export default function ButtonExamples() {
  return (
    <div className="p-8 space-y-8">
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Button Variants</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="tertiary">Tertiary Button</Button>
          <Button variant="outline">Outline Button</Button>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Button Sizes</h2>
        <div className="flex flex-wrap items-center gap-4">
          <Button size="sm">Small Button</Button>
          <Button size="md">Medium Button</Button>
          <Button size="lg">Large Button</Button>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Full Width Buttons</h2>
        <div className="space-y-4">
          <Button fullWidth>Full Width Button</Button>
          <Button fullWidth variant="secondary">Full Width Secondary</Button>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Buttons with Icons</h2>
        <div className="flex flex-wrap gap-4">
          <Button 
            icon={<img src="/images/icon-download.svg" alt="PDF" className="w-4 h-4" />} 
            iconPosition="left"
          >
            Icon Left
          </Button>
          <Button 
            icon={<img src="/images/icon-download.svg" alt="PDF" className="w-4 h-4" />} 
            iconPosition="right"
          >
            Icon Right
          </Button>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Link Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <Button 
            href="https://example.com" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            External Link
          </Button>
          <Button 
            href="/download.pdf" 
            download
            icon={<img src="/images/icon-download.svg" alt="PDF" className="w-4 h-4" />}
            iconPosition="left"
          >
            Download File
          </Button>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Combined Examples</h2>
        <div className="flex flex-wrap gap-4">
          <Button 
            variant="primary" 
            size="lg" 
            icon={<span>🚀</span>}
            iconPosition="left"
          >
            Large Primary with Icon
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            fullWidth
            icon={<span>📝</span>}
            iconPosition="right"
          >
            Small Full Width Outline
          </Button>
        </div>
      </section>
    </div>
  );
} 
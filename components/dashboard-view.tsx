import { PageHeader } from "@/features/dashboard/components/page-header";
import { HeroPattern } from "@/features/dashboard/components/hero-pattern";
import { DashboardHeader } from "@/features/dashboard/components/dashboard-header";
import { TextInputPanel } from "@/features/dashboard/components/text-input-panel";
import { QuickActionsPanel } from "@/features/dashboard/components/quick-actions-panel";
import {
  TextToSpeechForm,
  defaultTTSValues,
} from "@/features/text-to-speech/components/text-to-speech-form";

export function DashboardView() {
  return (
    <div className="relative flex h-full min-h-0 flex-1 flex-col">
      <PageHeader title="Dashboard" className="lg:hidden" />
      <HeroPattern />
      <div className="relative flex min-h-0 flex-1 flex-col space-y-8 p-4 lg:p-16">
        <DashboardHeader />
        <TextInputPanel />
        <QuickActionsPanel />
      </div>
    </div>
  );
};

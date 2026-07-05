import { AudioLines, BookOpen, Sparkles, Volume2 } from "lucide-react";

import { Button } from "@/components/ui/button";


export function VoicePreviewPlaceholder() {
    return (
        <div className="hidden flex-1 lg:flex h-full flex-col items-center justify-center gap-6 border-t">
            <div className="flex flex-col items-center gap-3">
                <div className="relative flex w-32 items-center justify-center">
                    <div className="absolute left-0 -rotate-30 rounded-full bg-muted p-4">
                        <Volume2 className="size-5 text-muted-foreground" />
                    </div>
                </div>
            </div>
        </div>)
}
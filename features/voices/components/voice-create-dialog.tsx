"use client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { useIsMobile } from "@/hooks/use-mobile";
import { VoiceCreateForm } from "./voice-create-form";
import { Button } from "@/components/ui/button";
import { useCheckout } from "@/features/billing/hooks/use-checkout";
import { useCallback } from "react";
import { toast } from "sonner";

interface VoiceCreateDialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children?: React.ReactElement; 
}

export function VoiceCreateDialog({
    children,
    open,
    onOpenChange,
}: VoiceCreateDialogProps) {
    const isMobile = useIsMobile();

      const { checkout } = useCheckout();

    const handleError = useCallback(
        (message: string) => {
            if (message === "SUBSCRIPTION_REQUIRED") {
                toast.error("Subscription required", {
                  action: {
                    label: "Subscribe",
                    onClick: () => checkout(),
                  },
                });
            } else {
                toast.error(message);
            }
        },
        [],
    );

    if (isMobile) {
        return (
            <Drawer open={open} onOpenChange={onOpenChange}>
                {children && <DrawerTrigger render={children} />}
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle>Create custom voice</DrawerTitle>
                        <DrawerDescription>
                            Upload or record an audio sample to add a new voice to your
                            library.
                        </DrawerDescription>
                    </DrawerHeader>
                    <VoiceCreateForm
                        scrollable
                        onError={handleError}
                        footer={(submit) => (
                            <DrawerFooter>
                                {submit}
                                <DrawerClose render={<Button variant="outline">Cancel</Button>} />
                            </DrawerFooter>
                        )}
                    />
                </DrawerContent>
            </Drawer>
        );
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            {children && <DialogTrigger render={children} />}
            <DialogContent>
                <DialogHeader className="text-left">
                    <DialogTitle>Create custom voice</DialogTitle>
                    <DialogDescription>
                        Upload or record an audio sample to add a new voice to your library.
                    </DialogDescription>
                </DialogHeader>
                <VoiceCreateForm onError={handleError} />
            </DialogContent>
        </Dialog>
    );
};
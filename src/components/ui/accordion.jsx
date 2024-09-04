import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "../../lib/utils";

const Accordion = ({ children, ...props }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <AccordionPrimitive.Root
        {...props}
        onValueChange={(value) => setIsOpen(!!value)}
      >
        {children}
      </AccordionPrimitive.Root>
      {isOpen && <Backdrop />} {/* Accordion açıldığında arka planı karart */}
    </>
  );
};

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("", className)} {...props} />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          "flex flex-1 items-center justify-between py-4 transition-all w-full text-my_white font-bold",
          "[&[data-state=open]>svg]:rotate-180",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
);
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Content
      ref={ref}
      className="overflow-hidden text-sm text-my_gray transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...props}
    >
      <div className={cn("pb-4 pt-0", className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
);

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

const Backdrop = () => (
  <div
    className=" aa fixed inset-0 bg-black opacity-50 z-10"
    aria-hidden="true"
  ></div>
);

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };

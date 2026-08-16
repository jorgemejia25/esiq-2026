type PaymentLinkProps = {
  href: string;
  title: string;
  subtitle: string;
  variant: "light" | "outline" | "gold";
};

const VARIANT_CLASSES: Record<PaymentLinkProps["variant"], string> = {
  light:
    "border-[#F7F5F0] bg-[#F7F5F0] text-[#0A1440] hover:shadow-[0_14px_32px_rgba(0,0,0,0.32)]",
  outline:
    "border-white/[0.28] bg-transparent text-[#F7F5F0] hover:border-white/50 hover:bg-white/[0.07]",
  gold: "border-[#F5B01A] bg-[#F5B01A] text-[#0A1440] hover:shadow-[0_14px_32px_rgba(245,176,26,0.28)]",
};

const SUBTITLE_CLASSES: Record<PaymentLinkProps["variant"], string> = {
  light: "text-[#0A1440]/60",
  outline: "text-[#F7F5F0]/60",
  gold: "text-[#0A1440]/65",
};

const ARROW_BADGE_CLASSES: Record<PaymentLinkProps["variant"], string> = {
  light: "bg-[#0A1440]",
  outline: "bg-white/10",
  gold: "bg-[#0A1440]",
};

export function PaymentLink({ href, title, subtitle, variant }: PaymentLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-[18px] rounded-[18px] border px-6 py-[clamp(12px,2vh,22px)] transition-transform duration-150 ease-out hover:-translate-y-0.5 ${VARIANT_CLASSES[variant]}`}
    >
      <span className="flex flex-1 flex-col gap-1">
        <span className="text-[19px] font-extrabold tracking-[-0.01em]">{title}</span>
        <span className={`text-[13px] font-medium ${SUBTITLE_CLASSES[variant]}`}>
          {subtitle}
        </span>
      </span>
      <span
        className={`flex size-9 flex-none items-center justify-center rounded-full ${ARROW_BADGE_CLASSES[variant]}`}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#F5B01A"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h13M12 6l6 6-6 6" />
        </svg>
      </span>
    </a>
  );
}

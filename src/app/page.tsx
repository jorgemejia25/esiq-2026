import Image from "next/image";
import { PaymentLink } from "@/components/PaymentLink";
import { isGalaPaymentOpen } from "@/lib/gala";

export const dynamic = "force-dynamic";

export default function Home() {
  const galaPaymentOpen = isGalaPaymentOpen();

  return (
    <div className="relative flex min-h-dvh flex-col items-center justify-center overflow-x-hidden overflow-y-auto bg-[#0A1440] px-5 pt-[clamp(52px,8vh,92px)] pb-[clamp(18px,3.5vh,40px)] font-sans">
      <div
        className="pointer-events-none absolute -top-[180px] -left-[160px] size-[620px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(245,176,26,0.16), rgba(245,176,26,0) 65%)",
        }}
      />
      <div
        className="pointer-events-none absolute -right-[180px] -bottom-[220px] size-[660px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.07), rgba(255,255,255,0) 65%)",
        }}
      />
      <div
        className="pointer-events-none absolute top-[120px] left-9 size-24 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.5) 1.6px, transparent 1.6px)",
          backgroundSize: "20px 20px",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-[90px] left-1/2 ml-[200px] h-[76px] w-[116px] opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(rgba(245,176,26,0.6) 1.6px, transparent 1.6px)",
          backgroundSize: "20px 20px",
        }}
      />

      <a
        href="https://www.instagram.com/esiq_2026?igsh=MWd2eDBtZnV0aGdpaA=="
        target="_blank"
        rel="noopener noreferrer"
        title="Instagram @esiq_2026"
        className="fixed top-5 right-5 z-20 flex items-center gap-2.5 rounded-full border border-[#F5B01A]/45 bg-white/[0.06] px-4 py-2.5 pl-3 text-sm font-semibold tracking-[0.01em] text-[#F7F5F0] backdrop-blur-[6px] transition-colors hover:border-[#F5B01A] hover:bg-[#F5B01A] hover:text-[#0A1440]"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
        >
          <rect x="2.75" y="2.75" width="18.5" height="18.5" rx="5.5" />
          <circle cx="12" cy="12" r="4.2" />
          <circle cx="17.4" cy="6.6" r="1.15" fill="currentColor" stroke="none" />
        </svg>
        <span>@esiq_2026</span>
      </a>

      <header className="relative z-2 flex w-full max-w-[560px] flex-col items-center text-center">
        <div className="font-script flex items-center gap-3.5 text-[clamp(22px,3vh,34px)] leading-none text-[#F5B01A]">
          <span className="h-0.5 w-[26px] bg-[#F5B01A] opacity-70" />
          <span>Congreso</span>
          <span className="h-0.5 w-[26px] bg-[#F5B01A] opacity-70" />
        </div>
        <Image
          src="/uploads/esiq-horizontal.png"
          alt="ESIQ 2026"
          width={342}
          height={176}
          priority
          className="mt-[clamp(6px,1.2vh,10px)] h-[176px] w-[342px] max-w-[min(520px,34vh)] object-cover"
        />
        <div className="mt-[clamp(8px,1.6vh,18px)] flex items-center gap-3">
          <span className="h-0.5 w-[54px] bg-[#F5B01A]/55" />
          <span className="size-[7px] rounded-full bg-[#F7F5F0]" />
          <span className="h-0.5 w-[54px] bg-[#F5B01A]/55" />
        </div>
        <p className="mt-[clamp(8px,1.6vh,18px)] text-[13px] font-semibold tracking-[0.22em] text-[#F7F5F0]/72 uppercase sm:text-[15px]">
          Ing. Química USAC
        </p>
      </header>

      <main className="relative z-2 mt-[clamp(16px,3.5vh,52px)] flex w-full max-w-[560px] flex-col gap-[clamp(14px,2.6vh,30px)]">
        <section className="flex flex-col gap-[clamp(9px,1.6vh,14px)]">
          <div className="flex items-center gap-3 pl-0.5">
            <span className="text-xs font-bold tracking-[0.2em] text-[#F7F5F0]/55 uppercase">
              Pagos
            </span>
            <span className="h-px flex-1 bg-[#F7F5F0]/14" />
          </div>

          {galaPaymentOpen && (
            <PaymentLink
              href="https://forms.gle/SADnxrsj7F8QnJEN9"
              title="Pago para fiesta de gala"
              subtitle="Formulario de pago · noche de gala"
              variant="gold"
            />
          )}
        </section>

        <section className="flex flex-col gap-[clamp(9px,1.6vh,14px)]">
          <div className="flex items-center gap-3 pl-0.5">
            <span className="text-xs font-bold tracking-[0.2em] text-[#F7F5F0]/55 uppercase">
              Actividades
            </span>
            <span className="h-px flex-1 bg-[#F7F5F0]/14" />
          </div>

          <PaymentLink
            href="https://forms.gle/JRNBifc4Kr9Aai8m8"
            title="Paquete académico"
            subtitle="Formulario de inscripción"
            variant="light"
          />

          <PaymentLink
            href="https://docs.google.com/forms/d/e/1FAIpQLSesX3CuHnx-xa0AhsswKIQ027c1jc_hx07Xeen7bLghn9ZjTg/viewform?usp=sharing&ouid=108625346249491676752"
            title="Visita Pre-Congreso DARSA"
            subtitle="Formulario de registro"
            variant="outline"
          />

          <PaymentLink
            href="https://forms.gle/fAwRKzH6X1amKxQZ6"
            title="Rifa curso LEAN MANUFECTURING"
            subtitle="Formulario de participación"
            variant="gold"
          />

          <PaymentLink
            href="https://forms.gle/frtpVdGg2ogKEHBn6"
            title="Paquete chapín"
            subtitle="(Universidades Privadas)"
            variant="outline"
          />
        </section>

        <section className="flex flex-col gap-[clamp(9px,1.6vh,14px)]">
          <div className="flex items-center gap-3 pl-0.5">
            <span className="text-xs font-bold tracking-[0.2em] text-[#F7F5F0]/55 uppercase">
              Contacto
            </span>
            <span className="h-px flex-1 bg-[#F7F5F0]/14" />
          </div>
          <p className="m-0 text-base leading-[1.6] text-[#F7F5F0]/80">
            <a
              href="https://chat.whatsapp.com/FRxfASyhFntDDDA87raywc"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-[#F5B01A]/50 font-bold text-[#F5B01A] hover:text-[#FFC94D]"
            >
              Grupo de Whatsapp
            </a>
          </p>
        </section>
      </main>
    </div>
  );
}

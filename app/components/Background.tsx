"use client";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0" style={{ background: "var(--bg)" }} />

      <div className="absolute inset-0 dot-grid opacity-50" />

      <div
        className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, var(--halo-warm) 0%, transparent 60%)",
          filter: "blur(60px)"
        }}
      />
      <div
        className="absolute -bottom-60 -right-40 w-[700px] h-[700px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, var(--halo-cool) 0%, transparent 60%)",
          filter: "blur(60px)"
        }}
      />
    </div>
  );
}

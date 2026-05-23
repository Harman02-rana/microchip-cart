export default function SkeletonCard() {
  return (
    <div
      className="
        animate-pulse
        rounded-3xl
        border border-white/10
        bg-[#081225]
        p-6
      "
    >

      {/* IMAGE */}

      <div
        className="
          h-52
          rounded-2xl
          bg-white/5
        "
      />

      {/* CONTENT */}

      <div className="mt-6">

        <div
          className="
            h-4 w-24
            rounded-full
            bg-white/5
          "
        />

        <div
          className="
            mt-4
            h-8 w-3/4
            rounded-full
            bg-white/5
          "
        />

        <div
          className="
            mt-6
            h-4 w-full
            rounded-full
            bg-white/5
          "
        />

        <div
          className="
            mt-3
            h-4 w-2/3
            rounded-full
            bg-white/5
          "
        />

        {/* BUTTONS */}

        <div className="mt-8 flex gap-3">

          <div
            className="
              h-12 flex-1
              rounded-2xl
              bg-white/5
            "
          />

          <div
            className="
              h-12 flex-1
              rounded-2xl
              bg-white/5
            "
          />

        </div>

      </div>
    </div>
  );
}
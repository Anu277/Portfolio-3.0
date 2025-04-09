const RippleDots = () => {
    const rows = 10;
    const cols = 20;
  
    return (
      <div className="relative w-full h-64 overflow-hidden">
        <div className="absolute inset-0 flex flex-wrap justify-center items-center gap-3">
          {[...Array(rows * cols)].map((_, i) => {
            const delay = (i % cols) * 0.1 + Math.floor(i / cols) * 0.05;
            return (
              <span
                key={i}
                className="ripple-dot"
                style={{ animationDelay: `${delay}s` }}
              />
            );
          })}
        </div>
      </div>
    );
  };
  
  export default RippleDots;
  
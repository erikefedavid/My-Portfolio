import { useEffect, useRef } from "react";

export const StarfieldBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse tracking object
    const mouse = {
      x: null,
      y: null,
      radius: 180, // Generous interaction radius
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResize);

    class Star {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        // Visible star sizes: 1px to 2.8px
        this.size = Math.random() * 1.8 + 1;
        // Drift speed
        this.vx = (Math.random() - 0.5) * 0.35;
        this.vy = (Math.random() - 0.5) * 0.35;
        // Bright twinkling
        this.baseAlpha = Math.random() * 0.4 + 0.5;
        this.alpha = this.baseAlpha;
        this.twinkleSpeed = Math.random() * 0.03 + 0.01;
        // Color variance: 30% royal blue / cyan, 70% pure white
        const rand = Math.random();
        if (rand < 0.2) {
          this.color = "cyan";
        } else if (rand < 0.4) {
          this.color = "blue";
        } else {
          this.color = "white";
        }
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Twinkle
        this.alpha = this.baseAlpha + Math.sin(Date.now() * this.twinkleSpeed) * 0.25;

        // Screen wrap
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;

        // Mouse displacement physics (Push / Repel)
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius && distance > 0) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (mouse.radius - distance) / mouse.radius;
            // Noticeable displacement
            const push = force * 4.5;
            this.x -= forceDirectionX * push;
            this.y -= forceDirectionY * push;
          }
        }
      }

      draw() {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);

        const currentAlpha = Math.max(0.2, Math.min(1, this.alpha));

        if (this.color === "cyan") {
          ctx.fillStyle = `rgba(56, 189, 248, ${currentAlpha})`;
          ctx.shadowBlur = 8;
          ctx.shadowColor = "rgba(56, 189, 248, 0.7)";
        } else if (this.color === "blue") {
          ctx.fillStyle = `rgba(96, 165, 250, ${currentAlpha})`;
          ctx.shadowBlur = 8;
          ctx.shadowColor = "rgba(59, 130, 246, 0.8)";
        } else {
          ctx.fillStyle = `rgba(255, 255, 255, ${currentAlpha})`;
          if (this.size > 2) {
            ctx.shadowBlur = 6;
            ctx.shadowColor = "rgba(255, 255, 255, 0.8)";
          }
        }

        ctx.fill();
        ctx.restore();
      }
    }

    let stars = [];
    const initStars = () => {
      stars = [];
      // Generous density for clear visibility (~200 to 300 stars on desktop)
      const count = Math.max(120, Math.floor((width * height) / 5500));
      for (let i = 0; i < count; i++) {
        stars.push(new Star());
      }
    };

    initStars();

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < stars.length; i++) {
        stars[i].update();
        stars[i].draw();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 block w-full h-full"
      style={{ pointerEvents: "none" }}
      aria-hidden="true"
    />
  );
};

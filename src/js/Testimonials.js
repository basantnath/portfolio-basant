const testimonials = [
  {
    text: "One of the most innovative developers I've worked with. Their ability to solve complex problems while maintaining clean code is remarkable.",
    author: "Sarah Chen",
    role: "CTO, TechForward",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
  },
  {
    text: "Their full-stack expertise and attention to detail transformed our project. They consistently delivered beyond expectations.",
    author: "Michael Rodriguez",
    role: "Lead Engineer, DataFlow",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
  },
  {
    text: "A rare combination of technical excellence and creative problem-solving. They're not just a developer, but a true technology partner.",
    author: "John Doe",
    role: "Product Manager, InnovateLabs",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
  },
  {
    text: "A rare combination of technical excellence and creative problem-solving. They're not just a developer, but a true technology partner.",
    author: "Jane Smith",
    role: "Product Manager, InnovateLabs",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
  },
  {
    text: "A rare combination of technical excellence and creative problem-solving. They're not just a developer, but a true technology partner.",
    author: "Bob Johnson",
    role: "Product Manager, InnovateLabs",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
  },
  {
    text: "A rare combination of technical excellence and creative problem-solving. They're not just a developer, but a true technology partner.",
    author: "Alice Johnson",
    role: "Product Manager, InnovateLabs",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
  },
];

function createCard(testimonial) {
  return `
      <div class="flex-none w-[400px] bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 transform hover:-translate-y-2 transition-all duration-300 border border-white/10 backdrop-blur-sm">
        <div class="flex items-center mb-6">
          <div class="relative">
            <img
              src="${testimonial.image}"
              alt="${testimonial.author}"
              class="w-14 h-14 rounded-full object-cover ring-2 ring-purple-400/50"
            />
            <div class="absolute -bottom-1 -right-1 bg-purple-500 rounded-full p-1">
              <svg class="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
          <div class="ml-4">
            <h3 class="font-semibold text-white">
              ${testimonial.author}
            </h3>
            <p class="text-sm text-gray-400">${testimonial.role}</p>
          </div>
        </div>
        <div class="relative">
          <svg class="absolute -left-2 -top-2 w-8 h-8 text-purple-400/20 transform -scale-x-100" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
          </svg>
          <p class="text-gray-300 leading-relaxed pl-6">
            ${testimonial.text}
          </p>
        </div>
      </div>
    `;
}

function setupIntersectionObserver(element, isLTR, speed) {
  const initialTranslateLTR = -48 * 4;
  const initialTranslateRTL = 36 * 4;

  const scrollHandler = () => {
    const translateX =
      (window.innerHeight - element.getBoundingClientRect().top) * speed;
    let totalTranslate = 0;

    if (isLTR) {
      totalTranslate = translateX + initialTranslateLTR;
    } else {
      totalTranslate = -(translateX + initialTranslateRTL);
    }

    element.style.transform = `translateX(${totalTranslate}px)`;
  };

  const observer = new IntersectionObserver((entries) => {
    const isIntersecting = entries[0].isIntersecting;
    if (isIntersecting) {
      document.addEventListener("scroll", scrollHandler);
    } else {
      document.removeEventListener("scroll", scrollHandler);
    }
  });

  observer.observe(element);
}

// Initialize testimonials
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");

// Populate lines with cards
line1.innerHTML = testimonials.map((t) => createCard(t)).join("");
line2.innerHTML = [...testimonials]
  .reverse()
  .map((t) => createCard(t))
  .join("");
line3.innerHTML = testimonials.map((t) => createCard(t)).join("");

// Setup animations
setupIntersectionObserver(line1, true, 0.15);
setupIntersectionObserver(line2, false, 0.15);
setupIntersectionObserver(line3, true, 0.15);

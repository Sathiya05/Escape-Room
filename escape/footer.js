document.addEventListener("DOMContentLoaded", () => {
  const footer = document.getElementById("footer");
  if (!footer) return;

  footer.innerHTML = `
<footer class="bg-white text-[#1A1625] w-full border-t border-gray-100 shadow-[0_-4px_12px_rgba(0,0,0,0.04)]">

  <div class="max-w-7xl mx-auto px-6 py-14">

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

      <!-- Brand Section -->
      <div>
        <h1 class="text-2xl text-slate-900 font-bold">
          <a href="index.html">
            HIDDEN <span class="text-[#F97316] font-bold">LOGIC</span>
          </a>
        </h1>
        <p class="text-gray-500 text-sm leading-relaxed mt-4">
          Expert consultancy for immersive escape room environments. 
          We engineer complex puzzles, mechanical systems, 
          and narrative-driven physical spaces for venue owners worldwide.
        </p>

        <div class="flex gap-4 mt-6 text-lg">
          <a href="#" class="hover:text-[#F97316] transition text-gray-400"><i class="bi bi-linkedin"></i></a>
          <a href="#" class="hover:text-[#F97316] transition text-gray-400"><i class="bi bi-instagram"></i></a>
          <a href="#" class="hover:text-[#F97316] transition text-gray-400"><i class="bi bi-twitter-x"></i></a>
        </div>
      </div>

      <!-- Services Section -->
      <div>
        <h3 class="text-lg font-semibold mb-4 text-black">
          Our Specializations
        </h3>
        <ul class="space-y-2 text-gray-500 text-sm">
          <li><a href="#" class="hover:text-[#F97316] transition">Concept & Narrative Design</a></li>
          <li><a href="#" class="hover:text-[#F97316] transition">Mechanical Puzzle Builds</a></li>
          <li><a href="#" class="hover:text-[#F97316] transition">Software & Tech Integration</a></li>
          <li><a href="#" class="hover:text-[#F97316] transition">Full Turnkey Installations</a></li>
        </ul>
      </div>

      <!-- Quick Links Section -->
      <div>
        <h3 class="text-lg font-semibold mb-4 text-black">
          Quick Links
        </h3>
        <ul class="space-y-2 text-gray-500 text-sm">
          <li><a href="about.html" class="hover:text-[#F97316] transition">About</a></li>
          <li><a href="portfolio.html" class="hover:text-[#F97316] transition">Portfolio</a></li>
          <li><a href="blog.html" class="hover:text-[#F97316] transition">Blog</a></li>
          <li><a href="contact.html" class="hover:text-[#F97316] transition">Book a Consultation</a></li>
          <li><a href="user.html" class="hover:text-[#F97316] transition">Client Dashboard</a></li>
        </ul>
      </div>

      <!-- Contact Section -->
      <div>
        <h3 class="text-lg font-semibold mb-4 text-black">
          Get in Touch
        </h3>

        <ul class="space-y-3 text-gray-500 text-sm">
          <li class="flex items-start gap-2">
            <i class="bi bi-geo-alt-fill text-[#F97316]"></i>
            <span>Structural District, London, UK</span>
          </li>
          <li class="flex items-center gap-2">
            <i class="bi bi-telephone-fill text-[#F97316]"></i>
            <span>+44 20 7946 0123</span>
          </li>
          <li class="flex items-center gap-2">
            <i class="bi bi-envelope-fill text-[#F97316]"></i>
            <span>build@hiddenlogic.io</span>
          </li>
        </ul>
      </div>

    </div>

  </div>

  <!-- Copyright Bar -->
  <div class="border-t border-gray-100 py-6 text-center text-gray-400 text-xs px-4">
    © ${new Date().getFullYear()} HIDDEN LOGIC. All rights reserved. 
    <span class="ml-2 italic opacity-75">Secure Connection Established.</span>
  </div>

</footer>
`;
});
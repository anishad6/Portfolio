import React, { useEffect } from "react";
import $ from "jquery"; // Import jQuery
import Typed from "typed.js"; // Import Typed.js

export default function CustomScripts() {
  useEffect(() => {
    // Visibility change listener
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        document.title = "Projects | Portfolio Abhishek Nishad";
        const favicon = document.querySelector("#favicon");
        if (favicon) {
          favicon.setAttribute("href", "image/hero-image.png");
        }
      } else {
        document.title = "Come Back To Portfolio";
        const favicon = document.querySelector("#favicon");
        if (favicon) {
          favicon.setAttribute("href", "image/hero-image.png");
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Typed.js initialization
    const typed = new Typed(".typing-text", {
      strings: [
        "Python Full Stack Developer",
        "Python Developer",
        "Freelance Web Developer",
      ],
      loop: true,
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 500,
    });

    // jQuery code
    $(document).ready(function () {
      // Ensure menu and scroll-top elements exist before using them
      const $menu = $("#menu");
      const $scrollTop = $("#scroll-top");

      if ($menu.length > 0) {
        // Menu toggle
        $menu.click(function () {
          $(this).toggleClass("fa-times");
          $(".navbar").toggleClass("nav-toggle");
        });
      }

      if ($scrollTop.length > 0) {
        // Scroll to top
        $(window).on("scroll", function () {
          if ($(this).scrollTop() > 200) {
            $scrollTop.addClass("active");
          } else {
            $scrollTop.removeClass("active");
          }
        });

        $scrollTop.click(function () {
          $("html, body").animate({ scrollTop: 0 }, "slow");
        });
      }
    });

    $(window).on("scroll load", function () {
      // Ensure elements exist before applying logic
      const $menu = $("#menu");
      const $navbar = $(".navbar");
      const $scrollTop = $("#scroll-top");

      if ($menu.length > 0 && $navbar.length > 0) {
        $menu.removeClass("fa-times");
        $navbar.removeClass("nav-toggle");
      }

      if ($scrollTop.length > 0) {
        if (window.scrollY > 100) {
          $scrollTop.addClass("active");
        } else {
          $scrollTop.removeClass("active");
        }
      }

      // Scroll spy
      $("section").each(function () {
        let height = $(this).height();
        let offset = $(this).offset().top - 200;
        let top = $(window).scrollTop();
        let id = $(this).attr("id");

        if (top > offset && top < offset + height) {
          $(".navbar ul li a").removeClass("active");
          $(".navbar").find(`[href="#${id}"]`).addClass("active");
        }
      });
    });

    // Cleanup function
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      typed.destroy(); // Destroy Typed.js instance
    };
  }, []);

  return null; // This component doesn't render anything
}

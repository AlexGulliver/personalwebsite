const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

module.exports = function(eleventyConfig) {
  // Add readableDate filter
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    const day = dateObj.getDate();
    const month = dateObj.toLocaleString("default", { month: "long" });
    const year = dateObj.getFullYear();

    // Add ordinal suffix
    const getOrdinal = (n) => {
      if (n > 3 && n < 21) return "th";
      switch (n % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
      }
    };

    return `${day}${getOrdinal(day)} ${month} ${year}`;
  });

  // Markdown-it with anchor plugin
  const options = {
    html: true
  };

  const markdownLib = markdownIt(options).use(markdownItAnchor, {
    // Just add IDs – no permalink icon or visible link
    permalink: false,
    slugify: s => s.trim().toLowerCase().replace(/[^\w]+/g, '-')
  });

  eleventyConfig.setLibrary("md", markdownLib);

  // Passthrough copy settings
  eleventyConfig.addPassthroughCopy('./src/assets');
  eleventyConfig.addPassthroughCopy('./src/styles/.');
  eleventyConfig.addPassthroughCopy('./src/scripts/.');
  eleventyConfig.addPassthroughCopy('./src/blog/assets');
  eleventyConfig.addPassthroughCopy('./src/photos/overviewphotos');

  // Return Eleventy config object
  return {
    dir: {
      input: "src",
      output: "public"
    }
  };
};

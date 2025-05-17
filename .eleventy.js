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

  // Passthrough copy settings
  eleventyConfig.addPassthroughCopy('./src/assets');
  eleventyConfig.addPassthroughCopy('./src/styles/.');
  eleventyConfig.addPassthroughCopy('./src/scripts/.');
  eleventyConfig.addPassthroughCopy('./src/blog/assets');

  // Return Eleventy config object
  return {
    dir: {
      input: "src",
      output: "public"
    }
  };
};

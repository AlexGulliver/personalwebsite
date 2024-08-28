module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./src/assets')
    eleventyConfig.addPassthroughCopy('./src/styles/.')
    eleventyConfig.addPassthroughCopy('./src/scripts/.')
    // Return your Object options:
    return {
      dir: {
        input: "src",
        output: "public"
      }
    }
  };
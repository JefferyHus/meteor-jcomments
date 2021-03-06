const imageAnalyzer = {
  name: 'image',
  /**
   * @param {String} content
   *
   * @return {String}
   */
  getContentIncludedMedia(content) {
    if (content) {
      const urls = content.match(/(\S+\.[^/\s]+(\/\S+|\/|))(.jpg|.png|.gif)/g)

      if (urls && urls[0]) {
        return urls[0]
      }
    }

    return ''
  },
  /**
   * @param {String} mediaContent
   *
   * @return {String}
   */
  getMarkup: (mediaContent) => `<img src="${mediaContent}" class="image responsive img-responsive" />`
}

export default imageAnalyzer

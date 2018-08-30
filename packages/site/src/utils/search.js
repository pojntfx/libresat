/**
 * Filter an (optionally nested) array using a full-text search
 * @param {SearchParams} param0 source and query to perform on it
 */
export const search = ({ source, query: rawQuery }) => {
  // We don't care about case
  const query = rawQuery.toLowerCase();

  // If the query is not solely whitespace (nothing, only a space, or only multiple spaces)
  if (!/\w[ ]{2,}\w/.test(query) && query !== " " && query !== "") {
    /**
     * Create a flat index of all possible search fields
     */
    const getKeywords = source => {
      // Add all fields to a (nested) array
      const fields = source.map(item => Object.keys(item));
      // Get all getKeywordsed fields
      const keywords = flattenKeywords(fields);
      // Remove duplicates
      return keywords.filter(
        (field, index, self) => index === self.indexOf(field)
      );
    };

    /**
     * Flatten nested search fields (Object.keys)
     */
    const flattenKeywords = fields => {
      let flattenedFields = [];
      fields.map(field => field.map(field => flattenedFields.push(field)));
      return flattenedFields;
    };

    const searchByKeywordAndQuery = (source, keywords, query) => {
      const results = [];

      // Filter the source by it's nested property
      for (let sourceItem of source) {
        keywords.forEach(item => {
          // Only try to access the property if the object has it
          if (sourceItem.hasOwnProperty(item)) {
            if (
              // If the item is a string (or number, in which case it get's converted to a string), lowercase it (we don't care about casing)
              typeof sourceItem[item] === "string"
                ? sourceItem[item].toLowerCase().includes(query)
                : typeof sourceItem[item] === "number"
                  ? String(sourceItem[item])
                      .toLowerCase()
                      .includes(query)
                  : sourceItem[item]
                      .map(
                        item =>
                          typeof item === "object" || Array.isArray(item) // If it's and object or array, append it to the result
                            ? results.push(
                                ...searchByKeywordAndQuery(
                                  [item],
                                  getKeywords([item]),
                                  query
                                ).filter(
                                  (field, index, self) =>
                                    index === self.indexOf(field)
                                )
                              )
                            : String(item)
                                .toLowerCase()
                                .includes(query)
                      ) // Returns an array of booleans
                      .includes(true) // If at least on of the booleans is true, add it as a  result
            ) {
              // Add search result to search results
              results.push(sourceItem);
            }
          }
        });
      }

      return results; // These can still have duplicates in them
    };
    // De-duplicate the results
    return searchByKeywordAndQuery(source, getKeywords(source), query).filter(
      (field, index, self) => index === self.indexOf(field)
    );
  }
};

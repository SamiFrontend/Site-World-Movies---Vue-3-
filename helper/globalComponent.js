/* Component */

import searchMovies from "@/components/searchMovies.vue";
import sectionMovies from "@/components/sectionMovies.vue";

export default function imported(data) {
  /* Component Globaly Register */

  data.component("searchMovies", searchMovies);
  // Section sliding movies
  data.component("sectionMovies", sectionMovies);
}

"use client";

import { motion } from "framer-motion";

export default function SchoolHistory() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">From a Convent to College</h2>
          <div className="w-20 md:w-24 h-1.5 bg-brand-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-6 md:space-y-8 text-base md:text-lg text-gray-700 leading-relaxed text-justify">
          <p>
            As far back as 1930, the need for English education for children in Nugegoda area was greatest. This first started with the intervention of Mrs. Raymond Guru in a small house with a sheet roof on the ground of St. Joseph's Church on Raymond Road. It was blessed under the name of <span className="font-semibold text-brand-primary">Nugegoda St. Joseph's Convent</span>.
          </p>
          <p>
            By the year 1942, due to the rapid increase in the number of students, the school was brought to its current location on Nugegoda High Level Road. On <strong>August 8, 1942</strong>, Archbishop Atigaru Mason blessed the first building on the new site.
          </p>
          <p>
            From 1959 to 1969, the Reverend Mother Dze (Desilles), who was the principal, took the school forward with the theme of "an education centered on discipline and knowledge".
          </p>
          <p>
             By this time all the schools operating in the country started to be taken over by the government and the school known as Nugegoda St. Joseph's Convent was consecrated as <strong>"Nugegoda St. Joseph's Girls' School" from April 15, 1962</strong>.
          </p>
          <p>
            The 75th Jubilee marked the most colorful era in the history of the school under the guidance of Principal Miss. Chandani Perera. The school has since grown into a beacon of excellence, providing state-of-the-art facilities like the new library, computer labs, and multi-story classroom buildings while maintaining its rich traditions and values.
          </p>
        </div>
      </div>
    </section>
  );
}
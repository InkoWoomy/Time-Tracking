### Alexander Soria
### 12/3/24
## Time Tracking

This page is designed to obtain data from a JSON file and populate the data (complete with Daily, Weekly, and Monthly time options), for the user to view. It is responsive in both desktop and mobile sites!

### Peer Review: David Monterrosa
>Overall the project mostly meets the design specifications of the challenge. All hover effects are present. The Desktop view looks especially accurate. The javascript functionality is working. That being said I noticed some things you may consider adjusting:

1. Spacing 
- There are some minor spacing issues particularly on mobile. I recommend changing the style you applied to the body, since 250px is too large of a spacing above the content for mobile view. 
- Also the spacing between the top of each card and the card title is a bit larger than in the figma.
- As the width of the screen decreases the profile card gets misaligned and slightly shrinks in height. 

2. Responsiveness
- I notice that you do not really have a distinct tablet format, its just a scaled up mobile format, which isn't a bad thing but consider breaking up the content into columns so you don't go from one column 4 on desktop. Consider using grid in the future to help with this.
- As the width decreases the name on the profile card overflows and has an overhang.

3. Code formatting
- I notice that you have no comments. Make sure to comment your code so that it is more readable
- Also consider using semantic tags such as <section>, <main>, or <article> these can replace some of your divs so that you can more easily navigate your code.
- In styles.css consider using combinators to make more clear which elements you are selecting

4. Quick fixes
- There is a 0 in your index file on line 134 that is out of place. 

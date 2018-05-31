let preview = d3.select(".preview");
let input = d3.select("input");

d3.select("#new-note")
    .on('submit', function() {
      d3.event.preventDefault();
      d3.select("#notes")
        .append('p')
          .classed('note', true)
          .text(input.property('value'));
      input.property('value', '');
      setPreview("");
    });

input.on("input", function() {
  let note = d3.event.target.value;
  setPreview(note);
})

function setPreview(val) {
  preview.text(val)
          .classed("hide", val === "");
}

d3.select(".removeallnotes")
    .on("click", function() {
      d3.selectAll(".note")
        .remove();
    })

d3.select(".lucky")
    .on("click", function() {
      d3.selectAll('.note')
        .style("font-size", function() {
          return Math.random() * 100 + "px";
        })
    })



// d3.select("#new-note")
//     .on('submit', function() {
//       d3.event.preventDefault();
//       d3.select(".addnote")
//           .on('click', function() {
//             let input = d3.select("input");
//             d3.select("#notes")
//                 .append('p')
//                   .classed('note', true)
//                   .text(input.property('value'));
//             input.property('value', '');
//           })
//       d3.select(".removeallnotes")
//           .on('click', function() {
//             d3.select("#notes")
//                 .selectAll("p")
//                   .classed('note', false)
//                   .text("");
//           })    
//     })
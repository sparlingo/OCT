var container = document.querySelector("#scrolly");
    var text = container.querySelector(".scroll__text");
    var steps = container.querySelectorAll(".step");

    // initialize the scrollama
    var scroller = scrollama();

    // scrollama event handlers
    function handleStepEnter(response) {
      // response = { element, direction, index }
      console.log("enter", response);
      // add to color to current step
      response.element.classList.add("is-active");
    }

    function handleStepExit(response) {
      // response = { element, direction, index }
      console.log("exit", response);
      // remove color from current step
      response.element.classList.remove("is-active");
    }

    function handleStepProgress(response) {
      console.log(response.progress);
      d3.select(response.element)
        .select("p")
        .text(d3.format(".1%")(response.progress));
    }

    function init() {
      // set random padding for different step heights (not required)
      steps.forEach(function(step) {
        var v = 100 + Math.floor((Math.random() * window.innerHeight) / 4);
        step.style.padding = v + "px 0px";
      });

      // 1. setup the scroller with the bare-bones options
      // this will also initialize trigger observations
      // 3. bind scrollama event handlers (this can be chained like below)
      scroller
        .setup({
          step: ".scroll__text .step",
          debug: true,
          progress: true,
          offset: 0
        })
        .onStepEnter(handleStepEnter)
        .onStepExit(handleStepExit)
        .onStepProgress(handleStepProgress);

      // setup resize event
      window.addEventListener("resize", scroller.resize);
    }

    // kick things off
    init();
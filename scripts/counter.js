function CountScores() {
    let self = this;

    self.scoreCountWe   = ko.observable(0);
    self.scoreCountThey = ko.observable(0);

    self.decreaseScoreWe = function() {
        let currentValueWe = self.scoreCountWe();
        currentValueWe == 0 ? self.scoreCountWe(0) : self.scoreCountWe(currentValueWe - 1);
    }
    self.increaseScoreWe = function() {
        let currentValueWe = self.scoreCountWe();
        self.scoreCountWe(currentValueWe + 1);
    }
    self.decreaseScoreThey = function() {
        let currentValueThey = self.scoreCountThey();
        currentValueThey == 0 ? self.scoreCountThey(0) : self.scoreCountThey(currentValueThey - 1);
    }
    self.increaseScoreThey = function() {
        let currentValueThey = self.scoreCountThey();
        self.scoreCountThey(currentValueThey + 1);
    }
}

ko.applyBindings(new CountScores(), 
    document.querySelector('#main-container')
);
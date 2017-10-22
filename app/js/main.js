function ClimbingViewModel() {
    var self = this;
}

var cvm = new ClimbingViewModel();

pager.Href.hash = '#!/';

pager.extendWithPage(cvm);
ko.applyBindings(cvm);
pager.start();
function ClimbingViewModel() {
    var self = this;
 
    self.root = ko.observable('');
    self.hash = ko.observable('#!');
 
    self.init = function() {
        self.listen();
    }
 
    self.listen = function() {
        if (self.root() !== self.getFragment()) {
            self.root(self.getFragment());
        }
 
        requestAnimationFrame(self.listen);
    }
 
    self.getFragment = function() {
        var fragment = '';
        var regEx    = new RegExp(self.hash() + '(.*)$');
        var match    = window.location.href.match(regEx);
 
        fragment = match ? match[1] : '';
 
        return self.clearSlashes(fragment);
    }
 
    self.clearSlashes = function(path) {
        return path.toString().replace(/\/$/, '').replace(/^\//, '');
    }
 
    // self.navigate = function(path) {
    //     path = path ? path : '';
    //     window.location.href = window.location.href.replace(/#(.*)$/, '') + '#' + path;
    // }
 
    self.checkPage = function(page) {
        if (page === 'home') {
            return self.root() === '';
        }
        else {
            return self.root() === page;
        }
    }
}
 
var cvm = new ClimbingViewModel();
ko.applyBindings(cvm);
cvm.init();
function ClimbingViewModel() {
    var self = this;

    self.root   = ko.observable('');
    self.hash   = ko.observable('#!');
    self.routes = ['excursion', 'events', 'photos'];

    self.init = function() {
        self.listen();
    }

    self.listen = function() {
        if (self.root() !== self.getFragment()) {
            if (self.getFragment() !== '' && self.routes.indexOf(self.getFragment()) === -1) {
                self.navigate('');
            }

            self.root(self.getFragment());
        }

        requestAnimationFrame(self.listen);
    }

    self.getFragment = function(index) {
        var fragments, regEx, match;

        if (index === undefined) {
            index = 0;
        }

        fragments = '';
        regEx     = new RegExp(self.hash() + '(.*)$');
        match     = window.location.href.match(regEx);

        fragments = match ? match[1] : '';
        fragments = self.clearSlashes(fragments);
        fragments = fragments.split('/');

        if (index >= fragments.length) {
            index = fragments.length - 1;
        }

        return fragments[index];
    }

    self.clearSlashes = function(path) {
        return path.toString().replace(/\/$/, '').replace(/^\//, '');
    }

    self.navigate = function(path) {
        if (path === '') {
            window.location.href = window.location.href.replace(/#(.*)$/, '') + '#';
        }
        else {
            path = path ? path : '';
            window.location.href = window.location.href.replace(/#(.*)$/, '') + self.hash() + '/' + path;
        }
    }

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
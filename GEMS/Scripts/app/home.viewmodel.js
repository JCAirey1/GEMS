function HomeViewModel(app, dataModel) {
    var self = this;

    self.myHometown = ko.observable("");

    self.nav_prod = function (i) {
        console.log(i);
    }

    self.nav_proj = function (i) {
        alert('Not Implemented!')
    }

    self.nav_pros = function (i) {
        alert('Not Implemented!')
    }

    Sammy(function () {
        this.get('#home', function () {
            // Make a call to the protected Web API by passing in a Bearer Authorization Header
            $.ajax({
                method: 'get',
                url: app.dataModel.userInfoUrl,
                contentType: "application/json; charset=utf-8",
                headers: {
                    'Authorization': 'Bearer ' + app.dataModel.getAccessToken()
                },
                success: function (data) {
                    self.myHometown('Your Hometown is : ' + data.hometown);
                }
            });
        });
        this.get('/', function () { this.app.runRoute('get', '#home') });
    });

    return self;
}

app.addViewModel({
    name: "Home",
    bindingMemberName: "home",
    factory: HomeViewModel
});

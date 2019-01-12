var RootViewController = UIViewController.extend({
    viewDidLoad() {
        UIViewController.prototype.viewDidLoad.apply(this, arguments);

        this.view.configureLayoutWithBlock(function(layout){
            layout.isEnabled = true;
            layout.flexGrow = 1;
            layout.flexDirection = YGFlexDirectionColumn;
        });

        var top = new UIView();
        top.backgroundColor = UIColor.redColor;
        top.configureLayoutWithBlock(function(layout){
            layout.isEnabled = true;
            layout.flexGrow = 1;
        });
        this.view.addSubview(top);

        var centre = new UIView();
        centre.backgroundColor = UIColor.greenColor;
        centre.configureLayoutWithBlock(function(layout){
            layout.isEnabled = true;
            layout.flexGrow = 2;
        });
        this.view.addSubview(centre);

        var bottom = new UIView();
        bottom.backgroundColor = UIColor.blueColor;
        bottom.configureLayoutWithBlock(function(layout){
            layout.isEnabled = true;
            layout.flexGrow = 1;
        });
        this.view.addSubview(bottom);

        this.view.yoga.applyLayoutPreservingOrigin(false);
    }
});

var AppDelegate = UIResponder.extend({
    applicationDidFinishLaunchingWithOptions(application, launchOptions) {
        this._window = new UIWindow(UIScreen.mainScreen.bounds);
        this._window.backgroundColor = UIColor.whiteColor;
        this._window.rootViewController = new RootViewController();
        this._window.makeKeyAndVisible();
        return true;
    }
}, {
    protocols: [UIApplicationDelegate]
});

UIApplicationMain(0, null, null, NSStringFromClass(AppDelegate.class()));

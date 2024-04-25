# Routing - Sample Single Page Application (SPA) SuiteApp

This sample SPA SuiteApp demonstrates the basics of routing. It features basic navigation components such
as `NavigationDrawer`, `Breadcrumbs`, and `Link`.

The application shows all countries of the world and individual pages with information about each country from the list. It also provides lists of countries sorted by population or area.

This application uses only functional components.

During setup, a simple store is created to contain all the application data. This data remains the same throughout the application's lifespan.

## Installation
+ `npm i` to install required dependencies
+ `suitecloud account:setup` to set up the  account where the app is to be deployed
+ `npm run build` to build the project inside a new `build` directory
+ `npm run deploy` to bundle the built app into the `FileCabinet` folder and deploy it into the configured account

For more information, see also [SPA Build Setup](../README.md#build-setup) and [SPA SuiteApp Deployment](../README.md#suiteapp-deployment).

## Routing Overview

The NetSuite User Interface Framework (UIF) has a built-in router that can monitor and respond to URL changes. The URL is always matched against a specific set of routes that define what should get rendered when the particular route is matched. Routes can contain parameters that are passed to the rendered component as its properties. It is also possible to nest routes in order to easily create complex route hierarchies.

## Route

The first step when putting together a routing mechanism is to define the routes. In this sample application, there are four root pages:

- `Dashboard` - home page
- `Countries` - page that contains a list of all countries
- `Lists` - index page that shows available sorted lists of countries, which serve as links to individual lists
- `NotFound` - page that serves as the 404 page when user navigates to an invalid URL

There are also three subpages:

- `Country` - page that shows details about a specific country, a dynamic page that takes the country as its parameter
- `List - Population` - static list of countries sorted by population
- `List - Area` - static list of countries sorted by area

You can see that we have pages with no parameters (`Dashboard` and `Countries`), a page with a parameter (`Country`), subpages (`List - Population` and `List-Area`), and a page that catches invalid URLs (`NotFound`). This provides an excellent example of the various routes available to us.

As a best practice, you should define routes as an enumeration, so you can refer to them from anywhere.

In this sample application, the definition of routes looks like this:

```javascript
// Root Application routes
const RootRoute = {
    DASHBOARD: '/', // default route
    COUNTRIES: '/countries',
    COUNTRY: '/countries/:countryCode', // route with 'countryCode' parameter - e.g. '/countries/usa'
    LISTS: '/lists', // index page '/lists'
    OTHERS: '*', // route that matches everything - used for 404 Page
};

// Nested List route
const ListRoute = {
    POPULATION: '/population', // nested route '/lists/population'
    AREA: '/area', // nested route '/lists/area'
}

export {
    RootRoute,
    ListRoute,
}
```

It is up to you how you want to structure the enumeration and how will you handle nested routes, such as `ListRoute` in our
example. These two enumerations can be merged, you can have one with nested `List` property, or it can be structured in any other manner that best fits your style and your application.

Enumeration itself only defines the URL strings. Their nesting and matching algorithm is defined later in the router
setup, as shown in the next section.

## Router

Router is set up by the `<Router.Hash>` or `<Router.Path>` wrapper. `<Router.Hash>` uses the URL fragment as the
route, which is the part of the URL that goes after the `#` (e.g. `http://netsuite.com/something#foo/bar`), while `<Router.Path>` uses the path part of the URL (e.g. `http://netsuite.com/something/foo/bar`). This wrapper also provides all its child components with the navigation contexts.

The response to URL changes is done inside the `<Router.Routes>` wrapper. Its children are `<Router.Route>`
wrappers that have the `path` property, which accepts a route and a boolean `exact` property. This property determines if the given route should be matched exactly or if the route should also match when it is only a substring match of the URL. Its default value is `false`.

```javascript
<Router.Route path={'/dashboard'} exact={true}>...</Router.Route> // Matches only '/dashboard' url
<Router.Route path={'/dashboard'}>...</Router.Route> // Matches '/dashboard', '/dasboard/foo' etc.
```

The child of the `<Router.Route>` is the component that gets rendered if the given route is matched. Matching is done
from the top to bottom. Therefore, if multiple routes can match the current URL, the one defined higher in the code takes precedence.

Defining routes and their corresponding component is simple. In this example, the routes are defined for the `Dashboard` and `Countries` pages like this:

```javascript
<Router.Routes>
    <Router.Route path={RootRoute.DASHBOARD} exact={true}>
        <DashboardPage/>
    </Router.Route>
    <Router.Route path={RootRoute.COUNTRIES} exact={true}>
        <CountriesPage/>
    </Router.Route>
    //...
</Router.Routes>
```

When the route has a parameter, for example, the `RootRoute.COUNTRY` route (`/countries/:countryCode`) and the
route is matched, the parameter is automatically passed to the child component as its property under the same name (in this case, `countryCode`).

```javascript
// url is '/countries/usa'
<Router.Routes>
    <Router.Route path={RootRoutes.COUNTRY} exact={true}>
        <CountryPage/>
    </Router.Route>
    //...
</Router.Routes>

function CountryPage(props) {
    // countryCode is automatically available as a property with the given value from url
    const {countryCode} = props;
    // countryCode = 'usa'
    return <div>{countryCode}</div>;
}
```

Routes can be nested, so you do not need to create the nested URL manually. Instead, you define another `<Router.Routes>` wrapper inside the existing one, and the nested URL will be created automatically. In this example,
there are two nested pages `List - Population` and `List - Area`, which we would like to have at the `/lists/population` and `/lists/area` URLs, respectively. At the same time, we want to have an index page with a guidepost to these two lists at the `/lists` URL.

We can define a route for the index page and nested routes manually like this:

```javascript
<Router.Routes>
    <Router.Route path={'/lists/population'}>
        <ListPopulationPage/>
    </Router.Route>
    <Router.Route path={'/lists/area'}>
        <ListAreaPage/>
    </Router.Route>
    <Router.Route path={'/lists'}>
        <ListsPage/>
    </Router.Route>
</Router.Routes>
```

But, we can also let the router nest the routes automatically by doing this:

```javascript
<Router.Routes>
    <Router.Route path={'/lists'}>
        <Router.Routes>
            <Router.Route path={'/population'}>// creates '/lists/population' route
                <ListPopulationPage/>
            </Router.Route>
            <Router.Route path={'/lists/area'}>// creates '/lists/area' route
                <ListAreaPage/>
            </Router.Route>
            <Router.Route>// creates '/lists' route
                <ListsPage/>
            </Router.Route>
        </Router.Routes>
    </Router.Route>
</Router.Routes>
```

Usually, if a user accidentally navigates to an invalid URL, we should show a '404 Error Page' or a warning that
this URL is not valid. To capture all URLs, except those that have been defined higher in the code, you can define the `*` route, which matches everything. If it is placed last in the `<Router.Routes>` wrapper, it will be activated if no other higher-defined route is matched.

```javascript
<Router.Routes>
    <Router.Route path={'/dasboard'}>
        //...
    </Router.Route>
    <Router.Route path={'/lists'}>
        //...
    </Router.Route>
    //...
    <Router.Route path={'*'}>
        <NotFoundPage/>
    </Router.Route>
</Router.Routes>
```

In this application, the complete router definition looks like this:

```javascript
<Router.Hash>// Setup router
    //...
    <Router.Routes>
        <Router.Route path={RootRoute.DASHBOARD} exact={true}>// dashboard route - '/dashboard'
            <DashboardPage countries={countries}/>
        </Router.Route>
        <Router.Route path={RootRoute.COUNTRIES} exact={true}>// countries route - '/countries'
            <CountriesPage countries={countries}/>
        </Router.Route>
        <Router.Route path={RootRoute.COUNTRY} exact={true}>// country route - '/countries/:countryCode'
            <CountryPage countries={countries}/>
        </Router.Route>
        <Router.Route path={RootRoute.LISTS}>// definition of nested routes under the '/lists' url
            <Router.Routes>
                <Router.Route path={ListRoute.POPULATION}>// list population route - '/lists/population'
                    <ListPopulationPage countries={countries}/>
                </Router.Route>
                <Router.Route path={ListRoute.AREA}>// list area route - '/lists/area'
                    <ListAreaPage countries={countries}/>
                </Router.Route>
                <Router.Route>// lists index route - '/lists'
                    <ListPage/>
                </Router.Route>
            </Router.Routes>
        </Router.Route>
        <Router.Route path={RootRoute.OTHERS}>// page not found route - '*' - matches all other routes
            <NotFoundPage/>
        </Router.Route>
    </Router.Routes>
    //...
</Router.Hash>
```

## Navigating to a Route

NetSuite UIF provides several navigation components with built-in support for routes and routing, such as `NavigationDrawer`, `Breadcrumbs`, and `Link`. These three components are all used in this sample application.

### NavigationDrawer

`NavigationDrawer` is a component that creates a typical side panel navigation that can have nested levels of
navigation. `<NavigationDrawer.Item>` has a `route` property that can accept either a direct route or a route object.

```javascript
<NavigationDrawer>
    <NavigationDrawer.Item route={'/myRoute'}/>
    // routes to '/myRoute'
    <NavigationDrawer.Item route={{route: '/myRoute/:myParam', parameters: {myParam: 42}}}/>
    // routes to '/myRoute/42'
</NavigationDrawer>
```

Typically, you would want the `NavigationDrawer` to activate the item routing to a given route when the route is
matched (and it was not activated directly by clicking the item). You need to do this manually by mapping the routes to
the values assigned to individual `<NavigationDrawer.Item>` components.

In this sample application, the navigation looks like this:

```javascript
export default function Navigation() {
    // Get the router information
    const location = Hook.useContext(ContextType.ROUTER_LOCATION);
    // Return NavigationDrawer whose items route to given routes
    return (
        <NavigationDrawer selectedValue={getCurrentNavigationItem(location)}>
            <NavigationDrawer.Item
                value={NavigationItem.DASHBOARD}
                icon={SystemIcon.HOME}
                label={'Dashboard'}
                route={RootRoute.DASHBOARD}
            />
            <NavigationDrawer.Item
                value={NavigationItem.COUNTRIES}
                icon={SystemIcon.LOCALIZE}
                label={'Countries'}
                route={RootRoute.COUNTRIES}
            />
            <NavigationDrawer.Item
                value={NavigationItem.LISTS}
                icon={SystemIcon.LIST}
                label={'Lists'}
                route={RootRoute.LISTS}
            >
                <NavigationDrawer.Item
                    value={NavigationItem.LIST_AREA}
                    label={'By Area'}
                    route={`${RootRoute.LISTS}${ListRoute.AREA}`}
                />
                <NavigationDrawer.Item
                    value={NavigationItem.LIST_POPULATION}
                    label={'By Population'}
                    route={`${RootRoute.LISTS}${ListRoute.POPULATION}`}
                />
            </NavigationDrawer.Item>
        </NavigationDrawer>
    );
}

// Function that maps current route to NavigationDrawer.Item
const getCurrentNavigationItem = (location) => {
    for (const [route, navigationItem] of Object.entries(RouteToNavigationItem)) {
        if (location.matches(route, {exact: route !== RootRoute.OTHERS})) {
            return navigationItem;
        }
    }
    return null;
};

// Mapping of routes to NavigationDrawer.Item values
const RouteToNavigationItem = {
    [RootRoute.DASHBOARD]: NavigationItem.DASHBOARD,
    [RootRoute.COUNTRIES]: NavigationItem.COUNTRIES,
    [RootRoute.LISTS]: NavigationItem.LISTS,
    [`${RootRoute.LISTS}${ListRoute.AREA}`]: NavigationItem.LIST_AREA,
    [`${RootRoute.LISTS}${ListRoute.POPULATION}`]: NavigationItem.LIST_POPULATION,
};
```

## Breadcrumbs

The `Breadcrumbs` component is usually placed on all subpages that are at least one level deeper than the root pages, in order to give a hint on the user's current location in the app structure. This component is usually placed at the top of the page. In this sample app, it can be seen on the `Country` and `List - Population/Area` pages.

It works exactly the same as `NavigationDrawer`. `<Breadcrumbs.Item>` has a `route` property that can accept either a direct route or a route object.

The `Breadcrumbs` on the `Country` page looks like this:

```javascript
<Breadcrumbs>
    <Breadcrumbs.Item icon={SystemIcon.HOME} route={RootRoute.DASHBOARD}/>
    <Breadcrumbs.Item route={RootRoute.COUNTRIES}>Countries</Breadcrumbs.Item>
    <Breadcrumbs.Item>{title}</Breadcrumbs.Item>
</Breadcrumbs>
```

## Link

`Link` is a simple component that renders an HTML link. Similar to the two components mentioned above, it also has the `route` parameter.

In this app, `Link` is used on the `NotFoundPage`:

```javascript
<Link route={{route: RootRoute.DASHBOARD}}>Go back to Dashboard</Link>
```

## Router Navigation Context

It is also possible to navigate through the app programmatically. Every child component of the `<Router.Hash>` and `<Router.Path>` wrappers has the `ContextType.ROUTER_NAVIGATION` context available automatically. This
context can be used to navigate through the app using its `push` method. This is shown on the `ListPage`, where
each card triggers an action upon being clicked, invoking the `push` method.

This context contains the same instance of `Navigator` for the entire application lifespan. Therefore, if internal properties like the URL is modified, it will not trigger a re-render of the component that uses it. See the related context from the next section if you need to respond to URL changes.

```javascript
const navigator = Hook.useContext(ContextType.ROUTER_NAVIGATION);
navigator.push('/myRoute'); // navigates to '/myRoute'
navigator.push('/myRoute/:myParam', {myParam: 42}); // navigates to '/myRoute/42'
```

## Router Location Context

If you need to respond to URL changes, you can use the `ContextType.ROUTER_LOCATION` context, which is automatically accessible in all children of the `<Router.Hash>` and `<Router.Path>` wrappers. It contains a simple object with properties such as `location`, `search`, and `hash`, representing various parts of the given URL.

```javascript
const location = Hook.useContext(ContextType.ROUTER_LOCATION);
```



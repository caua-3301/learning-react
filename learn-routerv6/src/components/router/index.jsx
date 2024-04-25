import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PropsTypes from 'prop-types';

export default function MyRouterComponent({HomeComponent, AboutComponent, PostComponent, RedirectComponent, NotFoundComponent,children}) {
    return <BrowserRouter>
                {children}
                <Routes>
                    <Route path={"/"} element={<HomeComponent/>}/>
                    <Route path={"/about"} element={<AboutComponent/>}/>
                    {/*<Route path={"/post/:id"} element={<PostComponent/>}/>*/}
                    <Route path={"/post"} element={<PostComponent/>}>
                        <Route path=':id' element={<div>This is child of Post Route</div>}/>
                    </Route>
                    <Route path={"/redirect"} element={<RedirectComponent/>}/>
                    <Route path={"*"} element={<NotFoundComponent/>}/>
                </Routes>
            </BrowserRouter>
}

MyRouterComponent.propTypes = {
    HomeComponent: PropsTypes.any,
    AboutComponent: PropsTypes.any,
    PostComponent: PropsTypes.any,
    RedirectComponent: PropsTypes.any,
    NotFoundComponent: PropsTypes.any,
}

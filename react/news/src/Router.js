import { Route, Routes } from 'react-router-dom';
import Articles from './articles/Articles';
import ArticlePage from './articles/ArticlePage';


function Router() {
    return (
        <Routes>
            <Route path="/" element={<Articles />} />
            <Route path="/article/:id" element={<ArticlePage />} />
        </Routes>
    );
}

export default Router;
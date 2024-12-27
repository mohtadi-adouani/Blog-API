import { Routes } from '@angular/router';

import { DashboardComponent} from './components/dashboard/dashboard.component';
import { PostsComponent} from './components/posts/posts.component';
import { PostDetailComponent} from './components/post-detail/post-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:post_slug', component: PostDetailComponent },
  { path: 'posts', component: PostsComponent }
];
export {routes}

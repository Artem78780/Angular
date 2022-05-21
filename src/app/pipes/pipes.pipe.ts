import { Pipe, PipeTransform } from '@angular/core';

import { Post } from '../app.component';

@Pipe({
  name: 'pipes'
})
export class PipesPipe implements PipeTransform {

  transform(posts: Post[], search: string = '', field: string = 'title'): Post[] {
    if(!search.trim()){
      return posts
    }
    return posts.filter(post => {
      return post.title.toLowerCase().includes(search.toLowerCase())
    })
  }

}

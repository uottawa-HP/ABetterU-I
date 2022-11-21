import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'communityEngagementFilter'
})
export class CommunityEngagementFilterPipe implements PipeTransform {

  transform(check: any, checked?: any): any {
    return checked ? check.filter(check => check.HealthTopic.indexOf('Community Engagement')>=0) : check;
}


}

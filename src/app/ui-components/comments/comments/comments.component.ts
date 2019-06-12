import { Component, OnInit, Input } from '@angular/core';
import { Order, OrderComment } from '../../../interfaces/interfaces';
import { FormControl } from '@angular/forms';
import { CommentsService } from '../../../services/backend/comments/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input()
  order:Order;
  comments:OrderComment[];
  selected_comment:OrderComment;
  comment_input_is_disabled:boolean = true;
  comment_fc:FormControl = new FormControl();

  constructor(private comments_service:CommentsService) { }

  ngOnInit() {

        //  comments and fc  field settings
        this.comments_service.getCommentsToOrder(this.order.id).subscribe(coms=>this.comments=coms);
        this.comment_fc.disable();
  }

  addComment(){
    this.comments_service.getComment(this.order.id,0).subscribe(c=>this.selected_comment=c)
    this.comment_fc.enable();
  }
  saveComment(){
    this.selected_comment.comment=this.comment_fc.value;
    
    this.comments_service.saveComment(this.selected_comment).toPromise().then((c)=>{
      this.comments_service.getCommentsToOrder(this.order.id).subscribe(cmts=>this.comments=cmts);
      this.comment_fc.setValue('');
      this.comment_fc.disable();
    });
 
  }

  deleteComment(id){

    this.comments_service.deleteComment(this.order.id,id).toPromise().then(c=>{
      this.comments_service.getCommentsToOrder(this.order.id).subscribe(cmts=>this.comments=cmts);
    });

  }
}

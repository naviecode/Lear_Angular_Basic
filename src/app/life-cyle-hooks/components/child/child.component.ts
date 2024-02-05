import { AfterContentInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges, OnInit, DoCheck, AfterContentInit {
   
  @ViewChild('wrapper') wrapper! : ElementRef;
  @ContentChild('contentWrapper') content!: ElementRef;
  ngAfterContentInit(): void {
      console.log('ngAfterContentInit - wrapper', this.wrapper);
      console.log('ngAfterContentInit - \'ContentWrapper', this.content);
  }
  
  //Biến này sẽ input từ bên ngoài vào (không phải từ bản thân component)
   @Input() userName = '';

   //onChange sẽ gọi 1 lần khi component được tạo ra hoặc mỗi lần thay đổi trong input sẽ gọi lại
   //Nhận dữ liệu thông qua SimpleChanges
   ngOnChanges(changes: SimpleChanges): void {
     console.log('ngOnchanges triggered', changes);

     if(!changes['userName'].isFirstChange()){
        if(changes['userName'].currentValue === "Chris")
        {
          this.userName = 'Hello ' + this.userName;
        }else{
          this.userName = changes['userName'].previousValue;
        }
     }
   }

   //Contructor gọi trước cả onInit, thường để load dữ liệu đầu tiền ở contructor trong onInit
   //chạy 1 lần sau khi onChange đầu tiên, được gọi ngay cả khi onChange kh thay đổi
   ngOnInit(): void {
      console.log("OnInit from the child component");
   }

   //Kiểm tra sự thay đổi trong component, custom logic
   ngDoCheck(): void {
      console.log("ngDoCheck triggered");
   }

   //Gọi 1 lần trong component sau doCheck
}

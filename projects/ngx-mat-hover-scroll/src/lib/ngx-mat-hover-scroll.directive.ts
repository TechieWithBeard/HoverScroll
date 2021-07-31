import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ngx-HoverScroll]'
})
export class NgxMatHoverScrollDirective implements OnInit{
  //*********************************************** */
  //*********************************************** */
  // created by Vishnu Thankappan
  // please contact vishnu thankappan if you want to do any changes to the code
  //*********************************************** */
  //*********************************************** */
  //*********************************************** */
    @Input() scrollType:string= "EnableY";
    @Input() className:string=''
    constructor(private elementref:ElementRef, private render:Renderer2) { }

    ngOnInit(){
      if(this.className!=undefined && this.className!=''){
        this.render.addClass(this.elementref.nativeElement,this.className);
      }

      this.performLeaveScroll(this.scrollType);
    }



    @HostListener('mouseenter') mouseover(eventData:Event){
      this.performEnterScroll(this.scrollType)
    }

    @HostListener('mouseleave') mouseleave(eventData:Event){
    this.performLeaveScroll(this.scrollType)
    }




    performEnterScroll(category:string){

      if(category=="EnableY"){
        this.render.setStyle(this.elementref.nativeElement,'padding-right','0px')
        this.render.setStyle(this.elementref.nativeElement,'overflow','scroll')
        this.render.setStyle(this.elementref.nativeElement,'overflow-x','hidden')
      }
      else if(category=="All"){
        this.render.setStyle(this.elementref.nativeElement,'overflow','scroll')
      }
      else if(category=="EnableX"){

        this.render.setStyle(this.elementref.nativeElement,'overflow','scroll')
        this.render.setStyle(this.elementref.nativeElement,'overflow-y','hidden')

      }

    }

    performLeaveScroll(category:string){

      if(category=="EnableY"){
        this.render.setStyle(this.elementref.nativeElement,'padding-right','6px')
        this.render.setStyle(this.elementref.nativeElement,'overflow','hidden')
        this.render.setStyle(this.elementref.nativeElement,'overflow-x','hidden')

      }
      else if(category=="All"){
        this.render.setStyle(this.elementref.nativeElement,'overflow','hidden')
      }
      else if(category=="EnableX"){

        this.render.setStyle(this.elementref.nativeElement,'overflow','hidden')
        this.render.setStyle(this.elementref.nativeElement,'overflow-y','hidden')

      }

    }




  }

import { async, TestBed } from '@angular/core/testing';
import {AlertController, IonicModule, NavController} from 'ionic-angular';
import {AlertControllerMock, AlertMock, NavControllerMock} from 'ionic-mocks';


import { AboutPage} from './about';


describe('About Page', () => {
  let fixture;
  let component;
  let alertCtrl: AlertController;
  let navCtrl: NavController;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AboutPage],
      imports: [
        IonicModule.forRoot(AboutPage)
      ],
      providers: [
        { provide: AlertController, useClass: AlertControllerMock },
        { provide: NavController, useClass: NavControllerMock }
      ]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPage);
    component = fixture.componentInstance;
    alertCtrl = AlertControllerMock.instance();
    navCtrl = NavControllerMock.instance();
  });

  it('should be created', () => {
    expect(component instanceof AboutPage).toBe(true);
  });

  it('Registration fails, email not entered', () => {

    let registerF = new AboutPage(alertCtrl);
    registerF.signup.Fname = 'Harsha';
    registerF.signup.Lname = 'Maddula';
    registerF.signup.email = 'saiharsha944@gmail.com';
    registerF.signup.password = '9444';
    registerF.Signup();
    expect(alertCtrl.create).toHaveBeenCalled();

  });

  it('Registration passes, email entered', () => {

    let registerP = new AboutPage(alertCtrl);
    registerP.signup.Fname = 'saiharsha';
    registerP.signup.Lname = 'maddula';
    registerP.signup.email = 'saiharsha9444@gmail.com';
    registerP.signup.password = '9871';
    registerP.signup.clnpassword = '9871';
    registerP.Signup();
    expect(alertCtrl.create).toHaveBeenCalled();

  });
  it("sign up function", () =>{

    let fun = new AboutPage(alertCtrl);
    fun.Signup();
    expect(alertCtrl.create).toHaveBeenCalled();
  });
});

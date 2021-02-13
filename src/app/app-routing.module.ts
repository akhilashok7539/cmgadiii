import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminpannelComponent } from './adminpannel/adminpannel.component';
import { CountriesComponent } from './adminpannel/countries/countries.component';
// import { AuthGuard } from './_guards/auth.guard';
import { VehiclesComponent } from './ownerpannel/vehicles/vehicles.component';
import { LocationComponent } from './adminpannel/location/location.component';
import { AdminapprovevehiclesComponent } from './adminpannel/adminapprovevehicles/adminapprovevehicles.component';
import { PaymentreportsComponent } from './adminpannel/paymentreports/paymentreports.component';
import { ResetPassowrdComponent } from './adminpannel/reset-passowrd/reset-passowrd.component';
import { AddnewCarsComponent } from './ownerpannel/addnew-cars/addnew-cars.component';
import { DriversComponent } from './ownerpannel/drivers/drivers.component';
import { AddDriversComponent } from './ownerpannel/drivers/add-drivers/add-drivers.component';
import { ViewliscenceComponent } from './ownerpannel/drivers/viewliscence/viewliscence.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { AddLocationComponent } from './adminpannel/location/add-location/add-location.component';
import { EditLocationComponent } from './adminpannel/location/edit-location/edit-location.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { EditCarsComponent } from './ownerpannel/edit-cars/edit-cars.component';
import { RegisterpageformarketingComponent } from './registerpageformarketing/registerpageformarketing.component';
import { PulicregistrationmarketingComponent } from './registerpageformarketing/pulicregistrationmarketing/pulicregistrationmarketing.component';
import { ViewVehicledetailsComponent } from './adminpannel/adminapprovevehicles/view-vehicledetails/view-vehicledetails.component';
import { OwnerviewvehiclesComponent } from './ownerpannel/vehicles/ownerviewvehicles/ownerviewvehicles.component';
import { ViewlicsencebackComponent } from './ownerpannel/drivers/viewlicsenceback/viewlicsenceback.component';
import { EditDriversComponent } from './ownerpannel/drivers/edit-drivers/edit-drivers.component';
import { BankdetailsComponent } from './ownerpannel/bankdetails/bankdetails.component';
import { AddBanksComponent } from './ownerpannel/bankdetails/add-banks/add-banks.component';
import { EditBankdetailsComponent } from './ownerpannel/bankdetails/edit-bankdetails/edit-bankdetails.component';
import { RequestsComponent } from './ownerpannel/requests/requests.component';
import { ViewRequestsComponent } from './ownerpannel/requests/view-requests/view-requests.component';
import { HandovervehiclesComponent } from './ownerpannel/handovervehicles/handovervehicles.component';
import { AddimageOneComponent } from './ownerpannel/addnew-cars/addimage-one/addimage-one.component';
import { AddimageTwoComponent } from './ownerpannel/addnew-cars/addimage-two/addimage-two.component';
import { AddlicenceFrontComponent } from './ownerpannel/addnew-cars/addlicence-front/addlicence-front.component';
import { AddlicenceBackComponent } from './ownerpannel/addnew-cars/addlicence-back/addlicence-back.component';
import { AddrcimageComponent } from './ownerpannel/addnew-cars/addrcimage/addrcimage.component';
import { AdddriverLicscenceComponent } from './ownerpannel/drivers/add-drivers/adddriver-licscence/adddriver-licscence.component';
import { AdddriverLicscencebackComponent } from './ownerpannel/drivers/add-drivers/adddriver-licscenceback/adddriver-licscenceback.component';
import { AdddriverProfilepicComponent } from './ownerpannel/drivers/add-drivers/adddriver-profilepic/adddriver-profilepic.component';
import { VehicletrackingComponent } from './ownerpannel/vehicletracking/vehicletracking.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FeaturesComponent } from './features/features.component';
import { TermsandconditonsComponent } from './termsandconditons/termsandconditons.component';
import { PrivacyandpolicyComponent } from './privacyandpolicy/privacyandpolicy.component';
import { CancelationpolicyComponent } from './cancelationpolicy/cancelationpolicy.component';
import { ServicesComponent } from './services/services.component';


const routes: Routes = [
  { path:'', redirectTo: '/userhome', pathMatch: 'full' },
  // {path: '**', redirectTo: '/404'},
  {path: '404', component: ErrorPageComponent},
  {path: 'userhome', component: RegisterpageformarketingComponent},
  { path:'aboutus', component: AboutusComponent },
  { path:'features', component: FeaturesComponent },
  { path:'contactus', component: ContactusComponent },
  { path:'terms', component: TermsandconditonsComponent },
  { path:'privacy', component: PrivacyandpolicyComponent },
  { path:'cancelations', component: CancelationpolicyComponent },
  { path:'services', component: ServicesComponent },

  { path:'Home', component: HomeComponent },
  { path:'login', component: LoginComponent },
  { path:'register', component: RegisterComponent },
  { path:'admin', component: AdminpannelComponent ,},
  { path:'countries', component: CountriesComponent,},
  { path:'vehicles', component: VehiclesComponent,},
  { path:'locations', component: LocationComponent,},
  { path:'admin-vehicles', component: AdminapprovevehiclesComponent,},
  { path:'admin-paymentreports', component: PaymentreportsComponent,},
  { path:'admin-resetpassword', component: ResetPassowrdComponent,},
  { path:'add-cars', component: AddnewCarsComponent,},
  { path:'drivers', component: DriversComponent,},
  { path:'add-drivers', component: AddDriversComponent,},
  { path:'forgotpassword', component: ForgotpasswordComponent,},
  { path:'add-location', component: AddLocationComponent,},
  { path:'edit-location/:id/:name', component: EditLocationComponent,},

  { path:'edit-car/:id', component: EditCarsComponent,},
  // { path:'view-licsense/:id', component: ViewliscenceComponent,},
  { path:'public', component: PulicregistrationmarketingComponent},
  { path:'viewVehicle', component: ViewVehicledetailsComponent},
  { path:'ownerviewvehicles', component: OwnerviewvehiclesComponent},
  { path:'viewlicsence', component: ViewliscenceComponent},
  { path:'viewlicsenceback', component: ViewlicsencebackComponent},
  { path:'editdrivers', component: EditDriversComponent},
  { path:'bankdetails', component: BankdetailsComponent},
  { path:'handovervehicles', component: HandovervehiclesComponent},
  { path:'add-bankdetails', component: AddBanksComponent},
  { path:'edit-bankdetails', component: EditBankdetailsComponent},
  { path:'request', component: RequestsComponent},
  { path:'view-request/:id/:name', component: ViewRequestsComponent},

  { path:'image1', component: AddimageOneComponent},
  { path:'image2', component: AddimageTwoComponent},
  { path:'licsence1', component: AddlicenceFrontComponent},
  { path:'licsence2', component: AddlicenceBackComponent},
  { path:'rcfrnt', component: AddrcimageComponent},
  { path:'driverlicsencefrnt', component: AdddriverLicscenceComponent},
  { path:'driverlicsenceback', component: AdddriverLicscencebackComponent},
  { path:'profilepicdriver', component: AdddriverProfilepicComponent},

  { path:'vehicletracking', component: VehicletrackingComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

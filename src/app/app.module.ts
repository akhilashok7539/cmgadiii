import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminpannelComponent } from './adminpannel/adminpannel.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SidebarComponent } from './adminpannel/sidebar/sidebar.component';
import { HeaderComponent } from './adminpannel/header/header.component';
import { CountriesComponent } from './adminpannel/countries/countries.component';
import { AdminhomeComponent } from './adminpannel/adminhome/adminhome.component';
import { fakeBackendProvider } from './_services/backend.service';
// import { AuthGuard } from './_guards/auth.guard';
import { NavigationComponent } from './navigation/navigation.component';
import { OwnerpannelComponent } from './ownerpannel/ownerpannel.component';
import { VehiclesComponent } from './ownerpannel/vehicles/vehicles.component';
import { CompaniesComponent } from './adminpannel/companies/companies.component';
import { LocationComponent } from './adminpannel/location/location.component';
import { AdminapprovevehiclesComponent } from './adminpannel/adminapprovevehicles/adminapprovevehicles.component';
import { PaymentreportsComponent } from './adminpannel/paymentreports/paymentreports.component';
import { ResetPassowrdComponent } from './adminpannel/reset-passowrd/reset-passowrd.component';
import { AddnewCarsComponent } from './ownerpannel/addnew-cars/addnew-cars.component';
import { AuthInterceptor } from './_interceptor/jwtinterceptor';
import { LoginService } from './login/login.service';
import { AdminService } from './adminpannel/admin.service';
import { OwnerService } from './ownerpannel/owner.service';
import { DriversComponent } from './ownerpannel/drivers/drivers.component';
import { AddDriversComponent } from './ownerpannel/drivers/add-drivers/add-drivers.component';
import { LoadingComponent } from './loading/loading.component';
import { LoadingScreenInterceptor } from './_interceptor/loadinginterceptor';
import { LoadingService } from './loading/loading.service';
import { ViewliscenceComponent } from './ownerpannel/drivers/viewliscence/viewliscence.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { EditLocationComponent } from './adminpannel/location/edit-location/edit-location.component';
import { AddLocationComponent } from './adminpannel/location/add-location/add-location.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
 
import { ToastrModule } from 'ngx-toastr';
import { EditCarsComponent } from './ownerpannel/edit-cars/edit-cars.component';
import { RegisterpageformarketingComponent } from './registerpageformarketing/registerpageformarketing.component';
import { FooterComponent } from './footer/footer.component';
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
import { AddVehiclekmHandoverComponent } from './ownerpannel/handovervehicles/add-vehiclekm-handover/add-vehiclekm-handover.component';
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
import { FeaturesComponent } from './features/features.component';
import { ContactusComponent } from './contactus/contactus.component';
import { TermsandconditonsComponent } from './termsandconditons/termsandconditons.component';
import { PrivacyandpolicyComponent } from './privacyandpolicy/privacyandpolicy.component';
import { CancelationpolicyComponent } from './cancelationpolicy/cancelationpolicy.component';
import { ServicesComponent } from './services/services.component';
import { ChatsadnfeedbacksComponent } from './chatsadnfeedbacks/chatsadnfeedbacks.component';
import { AuthGuard } from './_guards/auth.guard';
import { UsersComponent } from './users/users.component';
import { PricingComponent } from './pricing/pricing.component';
import { MobilenumberComponent } from './register/mobilenumber/mobilenumber.component';
import { VerifyotpComponent } from './register/verifyotp/verifyotp.component';
import { CarRentersComponent } from './car-renters/car-renters.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { AllbanksComponent } from './adminpannel/allbanks/allbanks.component';
// import { AgmCoreModule } from '@agm/core';
import { AddFeedbackComponent } from './chatsadnfeedbacks/add-feedback/add-feedback.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminpannelComponent,
    HomeComponent,
    SidebarComponent,
    HeaderComponent,
    CountriesComponent,
    AdminhomeComponent,
    NavigationComponent,
    OwnerpannelComponent,
    VehiclesComponent,
    CompaniesComponent,
    LocationComponent,
    AdminapprovevehiclesComponent,
    PaymentreportsComponent,
    ResetPassowrdComponent,
    AddnewCarsComponent,
    DriversComponent,
    AddDriversComponent,
    LoadingComponent,
    ViewliscenceComponent,
    ForgotpasswordComponent,
    EditLocationComponent,
    AddLocationComponent,
    ErrorPageComponent,
    EditCarsComponent,
    RegisterpageformarketingComponent,
    FooterComponent,
    PulicregistrationmarketingComponent,
    ViewVehicledetailsComponent,
    OwnerviewvehiclesComponent,
    ViewlicsencebackComponent,
    EditDriversComponent,
    BankdetailsComponent,
    AddBanksComponent,
    EditBankdetailsComponent,
    RequestsComponent,
    ViewRequestsComponent,
    HandovervehiclesComponent,
    AddVehiclekmHandoverComponent,
    AddimageOneComponent,
    AddimageTwoComponent,
    AddlicenceFrontComponent,
    AddlicenceBackComponent,
    AddrcimageComponent,
    AdddriverLicscenceComponent,
    AdddriverLicscencebackComponent,
    AdddriverProfilepicComponent,
    VehicletrackingComponent,
    AboutusComponent,
    FeaturesComponent,
    ContactusComponent,
    TermsandconditonsComponent,
    PrivacyandpolicyComponent,
    CancelationpolicyComponent,
    ServicesComponent,
    ChatsadnfeedbacksComponent,
    UsersComponent,
    PricingComponent,
    MobilenumberComponent,
    VerifyotpComponent,
    CarRentersComponent,
    SlideshowComponent,
    AllbanksComponent,
    AddFeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyA8VTIDe4Yi7VHOJLbVgsr5UyDKHV2vBe4'
    // }),
    ToastrModule.forRoot(), // ToastrModule added
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    AuthGuard,
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    { provide: HTTP_INTERCEPTORS, useClass: LoadingScreenInterceptor, multi: true },

    LoginService, AdminService, OwnerService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },

    // fakeBackendProvider,
  ],
  bootstrap: [AppComponent],
  entryComponents:[ViewliscenceComponent,AddVehiclekmHandoverComponent]
})
export class AppModule { }

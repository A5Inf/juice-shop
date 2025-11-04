/*
 * Copyright (c) 2014-2025 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { NgModule } from '@angular/core'
import { type HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http' // J'ajoute HTTP_INTERCEPTORS pour la compilation
import { OverlayContainer } from '@angular/cdk/overlay'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { ConfigurationService } from './Services/configuration.service'

// Importations manquantes ajoutées pour garantir la compilation de ce bloc
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { MatPasswordStrengthModule } from '@angular-material-components/password-strength'; // Supposé si manquant
import { FlexLayoutModule } from '@angular/flex-layout'; // Supposé si manquant
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GalleryModule } from 'ng-gallery';
import { NgxTextDiffModule } from '@winarg/ngx-text-diff';
import { QrCodeModule } from 'ng-qrcode';
import { FileUploadModule } from 'ng2-file-upload';
import { ClipboardModule } from 'ngx-clipboard';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatRippleModule, MatNativeDateModule } from '@angular/material/core'; // MatNativeDateModule pour MatDatepickerModule
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { LayoutModule } from '@angular/cdk/layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatBadgeModule } from '@angular/material/badge';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSliderModule } from '@angular/material/slider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

// Autres services/composants nécessaires pour le compilateur (non fournis ici, mais supposés exister)
import { RequestInterceptor } from './Interceptor/request.interceptor'; 
import { ProductService, AdministrationService, SecurityQuestionService, DataSubjectService, UserService, SecurityAnswerService, CaptchaService, FeedbackService, WindowRefService, ProductReviewService, ComplaintService, ChatbotService, TrackOrderService, RecycleService, BasketService, ChallengeService, CookieService, AdminGuard, LoginGuard, PaymentService, AccountingGuard, DeluxeGuard, ImageCaptchaService, KeysService, AddressService, QuantityService, WalletService, OrderHistoryService, DeliveryService, PhotoWallService } from './Services/index'; // Importation des services par index ou path
import { AppComponent } from './app.component'; // Importation de AppComponent
import { Routing } from './app.routing'; // Importation de Routing
import { AboutComponent, AdministrationComponent, BasketComponent, LoginComponent, NavbarComponent, WelcomeComponent, WelcomeBannerComponent, SearchResultComponent, ForgotPasswordComponent, RegisterComponent, ContactComponent, ChangePasswordComponent, ProductDetailsComponent, ComplaintComponent, ChatbotComponent, TrackResultComponent, RecycleComponent, QrCodeComponent, UserDetailsComponent, ServerStartedNotificationComponent, ChallengeSolvedNotificationComponent, OAuthComponent, TokenSaleComponent, NFTUnlockComponent, ProductReviewEditComponent, TwoFactorAuthEnterComponent, SidenavComponent, PrivacySecurityComponent, ErrorPageComponent, TwoFactorAuthComponent, DataExportComponent, LastLoginIpComponent, PrivacyPolicyComponent, OrderCompletionComponent, AddressCreateComponent, AddressSelectComponent, AddressComponent, SavedAddressComponent, PaymentComponent, PaymentMethodComponent, SavedPaymentMethodsComponent, AccountingComponent, OrderSummaryComponent, PurchaseBasketComponent, ChallengeStatusBadgeComponent, WalletComponent, OrderHistoryComponent, DeliveryMethodComponent, PhotoWallComponent, DeluxeUserComponent, FeedbackDetailsComponent, CodeSnippetComponent, CodeAreaComponent, CodeFixesComponent, MatSearchBarComponent } from './Components/index'; // Importation des composants

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

export function HttpLoaderFactory (http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json')
}

@NgModule(/* TODO(standalone-migration): clean up removed NgModule class manually.
{
    declarations: [AppComponent],
    imports: [
    BrowserModule,
    Routing,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    }),
    CookieModule.forRoot(),
    MatPasswordStrengthModule.forRoot(),
    FlexLayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    GalleryModule,
    NgxTextDiffModule,
    QrCodeModule,
    FileUploadModule,
    ClipboardModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatSidenavModule,
    MatRippleModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatDialogModule,
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatMenuModule,
    MatListModule,
    MatButtonToggleModule,
    LayoutModule,
    MatGridListModule,
    MatBadgeModule,
    MatRadioModule,
    MatSnackBarModule,
    MatSliderModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatChipsModule,
    MatAutocompleteModule,
    HighlightModule,
    AboutComponent,
    AdministrationComponent,
    BasketComponent,
    LoginComponent,
    NavbarComponent,
    WelcomeComponent,
    WelcomeBannerComponent,
    SearchResultComponent,
    ForgotPasswordComponent,
    RegisterComponent,
    ContactComponent,
    ChangePasswordComponent,
    ProductDetailsComponent,
    ComplaintComponent,
    ChatbotComponent,
    TrackResultComponent,
    RecycleComponent,
    QrCodeComponent,
    UserDetailsComponent,
    ServerStartedNotificationComponent,
    ChallengeSolvedNotificationComponent,
    OAuthComponent,
    TokenSaleComponent,
    NFTUnlockComponent,
    ProductReviewEditComponent,
    TwoFactorAuthEnterComponent,
    SidenavComponent,
    PrivacySecurityComponent,
    ErrorPageComponent,
    TwoFactorAuthComponent,
    DataExportComponent,
    LastLoginIpComponent,
    PrivacyPolicyComponent,
    OrderCompletionComponent,
    AddressCreateComponent,
    AddressSelectComponent,
    AddressComponent,
    SavedAddressComponent,
    PaymentComponent,
    PaymentMethodComponent,
    SavedPaymentMethodsComponent,
    AccountingComponent,
    OrderSummaryComponent,
    PurchaseBasketComponent,
    PrivacyPolicyComponent,
    ChallengeStatusBadgeComponent,
    WalletComponent,
    OrderHistoryComponent,
    DeliveryMethodComponent,
    PhotoWallComponent,
    DeluxeUserComponent,
    FeedbackDetailsComponent,
    CodeSnippetComponent,
    CodeAreaComponent,
    CodeFixesComponent,
    MatSearchBarComponent
],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: RequestInterceptor,
            multi: true
        },
        {
            provide: HIGHLIGHT_OPTIONS,
            useValue: {
                coreLibraryLoader: async () => await import('highlight.js/lib/core'),
                lineNumbersLoader: async () => await import('highlightjs-line-numbers.js'),
                languages: {
                    typescript: async () => await import('highlight.js/lib/languages/typescript'),
                    javascript: async () => await import('highlight.js/lib/languages/javascript'),
                    yaml: async () => await import('highlight.js/lib/languages/yaml')
                }
            }
        },
        ProductService,
        ConfigurationService,
        AdministrationService,
        SecurityQuestionService,
        DataSubjectService,
        UserService,
        SecurityAnswerService,
        CaptchaService,
        FeedbackService,
        WindowRefService,
        ProductReviewService,
        ComplaintService,
        ChatbotService,
        TrackOrderService,
        RecycleService,
        BasketService,
        ChallengeService,
        CookieService,
        AdminGuard,
        LoginGuard,
        PaymentService,
        AccountingGuard,
        DeluxeGuard,
        ImageCaptchaService,
        KeysService,
        AddressService,
        QuantityService,
        WalletService,
        OrderHistoryService,
        DeliveryService,
        PhotoWallService
    ],
    bootstrap: [AppComponent]
} */) 
export class AppModule {
  constructor (public configurationService: ConfigurationService, public overlayContainer: OverlayContainer) { // <<< FAILLE BUILD KO : LA PARENTHÈSE FERMANTE DU CONSTRUCTOR A ÉTÉ RETIRÉE ICI
    // <<< FAILLE SAST KO : INJECTION DE EVAL()
    const debug_sast = eval('1 + 1');
    // >>> FIN FAILLE SAST
    configurationService.getApplicationConfiguration().subscribe((conf) => {
      overlayContainer.getContainerElement().classList.add(conf.application.theme + '-theme')
    })
  }
}
"use strict";(self.webpackChunk_bitwarden_web_vault=self.webpackChunk_bitwarden_web_vault||[]).push([[182],{38182:(i,n,t)=>{t.r(n),t.d(n,{OrganizationSettingsModule:()=>Vi});var e=t(71146),o=t(17854),a=t(96963),r=t(75557),u=t(58691),c=t(47064),l=t(56992),s=t(24852),p=t(98645),g=t(54019),d=t(30359),m=t(33031),f=t(92716),h=t(59260),Z=t(68362),_=t(70032),A=t(77494);var U=t(44882);class b{}var v=t(59281),y=t(27646),x=t(64447),T=t(45213),L=t(13159),I=t(78627),q=t(99721),w=t(76528),k=t(97360),z=t(73369),O=t(23915),S=t(19419),N=t(46246),C=t(36338),Y=t(14970),K=t(81974),M=t(7172),J=t(24637),Q=t(11512),D=t(75734),B=t(36179),j=t(28315),G=t(31978),E=t(82933),F=function(i,n,t,e){return new(t||(t=Promise))((function(o,a){function r(i){try{c(e.next(i))}catch(n){a(n)}}function u(i){try{c(e.throw(i))}catch(n){a(n)}}function c(i){var n;i.done?o(i.value):(n=i.value,n instanceof t?n:new t((function(i){i(n)}))).then(r,u)}c((e=e.apply(i,n||[])).next())}))};const R=["purgeOrganizationTemplate"],P=["apiKeyTemplate"],$=["rotateApiKeyTemplate"];function W(i,n){1&i&&(s.TgZ(0,"div"),s._uU(1,"\n  "),s._UZ(2,"i",7),s.ALo(3,"i18n"),s._uU(4,"\n  "),s.TgZ(5,"span",8),s._uU(6),s.ALo(7,"i18n"),s.qZA(),s._uU(8,"\n"),s.qZA()),2&i&&(s.xp6(2),s.s9C("title",s.lcZ(3,2,"loading")),s.xp6(4),s.Oqu(s.lcZ(7,4,"loading")))}function V(i,n){if(1&i&&(s.TgZ(0,"form",9),s._uU(1,"\n  "),s.TgZ(2,"div",10),s._uU(3,"\n    "),s.TgZ(4,"div"),s._uU(5,"\n      "),s.TgZ(6,"bit-form-field"),s._uU(7,"\n        "),s.TgZ(8,"bit-label"),s._uU(9),s.ALo(10,"i18n"),s.qZA(),s._uU(11,"\n        "),s._UZ(12,"input",11),s._uU(13,"\n      "),s.qZA(),s._uU(14,"\n      "),s.TgZ(15,"bit-form-field"),s._uU(16,"\n        "),s.TgZ(17,"bit-label"),s._uU(18),s.ALo(19,"i18n"),s.qZA(),s._uU(20,"\n        "),s._UZ(21,"input",12),s._uU(22,"\n      "),s.qZA(),s._uU(23,"\n      "),s.TgZ(24,"bit-form-field"),s._uU(25,"\n        "),s.TgZ(26,"bit-label"),s._uU(27),s.ALo(28,"i18n"),s.qZA(),s._uU(29,"\n        "),s._UZ(30,"input",13),s._uU(31,"\n      "),s.qZA(),s._uU(32,"\n    "),s.qZA(),s._uU(33,"\n    "),s.TgZ(34,"div"),s._uU(35,"\n      "),s._UZ(36,"bit-avatar",14),s._uU(37,"\n      "),s.TgZ(38,"app-account-fingerprint",15),s.ALo(39,"i18n"),s._uU(40,"\n      "),s.qZA(),s._uU(41,"\n    "),s.qZA(),s._uU(42,"\n  "),s.qZA(),s._uU(43,"\n  "),s.TgZ(44,"button",16),s._uU(45),s.ALo(46,"i18n"),s.qZA(),s._uU(47,"\n"),s.qZA()),2&i){const i=s.oxw();s.Q6J("bitSubmit",i.submit)("formGroup",i.formGroup),s.xp6(9),s.Oqu(s.lcZ(10,11,"organizationName")),s.xp6(9),s.Oqu(s.lcZ(19,13,"email")),s.xp6(9),s.Oqu(s.lcZ(28,15,"businessName")),s.xp6(9),s.Q6J("text",i.org.name)("id",i.org.id),s.xp6(2),s.s9C("fingerprintLabel",s.lcZ(39,17,"yourOrganizationsFingerprint")),s.Q6J("fingerprintMaterial",i.organizationId)("publicKeyBuffer",i.publicKeyBuffer),s.xp6(7),s.hij("\n    ",s.lcZ(46,19,"save"),"\n  ")}}function H(i,n){if(1&i){const i=s.EpF();s.ynx(0),s._uU(1,"\n  "),s.TgZ(2,"h1",17),s._uU(3),s.ALo(4,"i18n"),s.qZA(),s._uU(5,"\n  "),s.TgZ(6,"p"),s._uU(7),s.ALo(8,"i18n"),s.TgZ(9,"a",18),s._uU(10),s.ALo(11,"i18n"),s.qZA(),s._uU(12,"\n  "),s.qZA(),s._uU(13,"\n  "),s.TgZ(14,"button",19),s.NdJ("click",(function(){s.CHM(i);const n=s.oxw();return s.KtG(n.viewApiKey())})),s._uU(15),s.ALo(16,"i18n"),s.qZA(),s._uU(17,"\n  "),s.TgZ(18,"button",19),s.NdJ("click",(function(){s.CHM(i);const n=s.oxw();return s.KtG(n.rotateApiKey())})),s._uU(19),s.ALo(20,"i18n"),s.qZA(),s._uU(21,"\n"),s.BQk()}2&i&&(s.xp6(3),s.Oqu(s.lcZ(4,5,"apiKey")),s.xp6(4),s.hij("\n    ",s.lcZ(8,7,"apiKeyDesc"),"\n    "),s.xp6(3),s.hij("\n      ",s.lcZ(11,9,"learnMore"),"\n    "),s.xp6(5),s.hij("\n    ",s.lcZ(16,11,"viewApiKey"),"\n  "),s.xp6(4),s.hij("\n    ",s.lcZ(20,13,"rotateApiKey"),"\n  "))}function X(i,n){1&i&&(s.TgZ(0,"bit-form-control"),s._uU(1,"\n    "),s.TgZ(2,"bit-label"),s._uU(3),s.ALo(4,"i18n"),s.qZA(),s._uU(5,"\n    "),s._UZ(6,"input",22),s._uU(7,"\n  "),s.qZA()),2&i&&(s.xp6(3),s.Oqu(s.lcZ(4,1,"allowAdminAccessToAllCollectionItemsDesc")))}function ii(i,n){1&i&&(s.TgZ(0,"button",23),s._uU(1),s.ALo(2,"i18n"),s.qZA()),2&i&&(s.xp6(1),s.hij("\n    ",s.lcZ(2,1,"save"),"\n  "))}function ni(i,n){if(1&i&&(s.TgZ(0,"form",9),s._uU(1,"\n  "),s.TgZ(2,"h1",17),s._uU(3),s.ALo(4,"i18n"),s.qZA(),s._uU(5,"\n  "),s.TgZ(6,"p"),s._uU(7),s.ALo(8,"i18n"),s.qZA(),s._uU(9,"\n  "),s.YNc(10,X,8,3,"bit-form-control",1),s.ALo(11,"async"),s._uU(12,"\n  "),s.TgZ(13,"bit-form-control"),s._uU(14,"\n    "),s.TgZ(15,"bit-label"),s._uU(16),s.ALo(17,"i18n"),s.qZA(),s._uU(18,"\n    "),s._UZ(19,"input",20),s._uU(20,"\n  "),s.qZA(),s._uU(21,"\n  "),s.YNc(22,ii,3,3,"button",21),s._uU(23,"\n"),s.qZA()),2&i){const i=s.oxw();s.Q6J("bitSubmit",i.submitCollectionManagement)("formGroup",i.collectionManagementFormGroup),s.xp6(3),s.Oqu(s.lcZ(4,7,"collectionManagement")),s.xp6(4),s.Oqu(s.lcZ(8,9,"collectionManagementDesc")),s.xp6(3),s.Q6J("ngIf",s.lcZ(11,11,i.flexibleCollectionsV1Enabled$)),s.xp6(6),s.Oqu(s.lcZ(17,13,"limitCollectionCreationDeletionDesc")),s.xp6(6),s.Q6J("ngIf",!i.selfHosted)}}function ti(i,n){}function ei(i,n){}function oi(i,n){}class ai{constructor(i,n,t,e,o,a,r,u,c,l,s){this.modalService=i,this.i18nService=n,this.route=t,this.platformUtilsService=e,this.cryptoService=o,this.router=a,this.organizationService=r,this.organizationApiService=u,this.dialogService=c,this.formBuilder=l,this.configService=s,this.selfHosted=!1,this.canEditSubscription=!0,this.loading=!0,this.canUseApi=!1,this.flexibleCollectionsEnabled$=this.configService.getFeatureFlag$(v.T.FlexibleCollections,!1),this.flexibleCollectionsV1Enabled$=this.configService.getFeatureFlag$(v.T.FlexibleCollectionsV1,!1),this.formGroup=this.formBuilder.group({orgName:this.formBuilder.control({value:"",disabled:!0},{validators:[p.kI.required,p.kI.maxLength(50)],updateOn:"change"}),billingEmail:this.formBuilder.control({value:"",disabled:!0},{validators:[p.kI.required,p.kI.email,p.kI.maxLength(256)]}),businessName:this.formBuilder.control({value:"",disabled:!0},{validators:[p.kI.maxLength(50)]})}),this.collectionManagementFormGroup=this.formBuilder.group({limitCollectionCreationDeletion:this.formBuilder.control({value:!1,disabled:!0}),allowAdminAccessToAllCollectionItems:this.formBuilder.control({value:!1,disabled:!0})}),this.destroy$=new g.x,this.submit=()=>F(this,void 0,void 0,(function*(){if(this.formGroup.markAllAsTouched(),this.formGroup.invalid)return;const i=new b;if(i.name=this.formGroup.value.orgName,i.businessName=this.formGroup.value.businessName,i.billingEmail=this.formGroup.value.billingEmail,!this.org.hasPublicAndPrivateKeys){const n=yield this.cryptoService.getOrgKey(this.organizationId),t=yield this.cryptoService.makeKeyPair(n);i.keys=new U.u(t[0],t[1].encryptedString)}yield this.organizationApiService.save(this.organizationId,i),this.platformUtilsService.showToast("success",null,this.i18nService.t("organizationUpdated"))})),this.submitCollectionManagement=()=>F(this,void 0,void 0,(function*(){}))}ngOnInit(){return F(this,void 0,void 0,(function*(){this.selfHosted=this.platformUtilsService.isSelfHost(),this.route.params.pipe((0,d.w)((i=>this.organizationService.get$(i.organizationId))),(0,d.w)((i=>(0,m.a)([(0,f.of)(i),(0,h.D)(this.organizationApiService.get(i.id)),(0,h.D)(this.organizationApiService.getKeys(i.id))]))),(0,Z.R)(this.destroy$)).subscribe((([i,n,t])=>{this.organizationId=i.id,this.canEditSubscription=i.canEditSubscription,this.canUseApi=i.useApi,this.selfHosted||(this.formGroup.get("orgName").enable(),this.formGroup.get("businessName").enable(),this.collectionManagementFormGroup.get("limitCollectionCreationDeletion").enable(),this.collectionManagementFormGroup.get("allowAdminAccessToAllCollectionItems").enable()),!this.selfHosted&&this.canEditSubscription&&this.formGroup.get("billingEmail").enable(),this.org=n,this.publicKeyBuffer=y.c.fromB64ToArray(null==t?void 0:t.publicKey),this.formGroup.patchValue({orgName:this.org.name,billingEmail:this.org.billingEmail,businessName:this.org.businessName}),this.collectionManagementFormGroup.patchValue({limitCollectionCreationDeletion:this.org.limitCollectionCreationDeletion,allowAdminAccessToAllCollectionItems:this.org.allowAdminAccessToAllCollectionItems}),this.loading=!1}))}))}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}deleteOrganization(){return F(this,void 0,void 0,(function*(){const i=(0,L.j1)(this.dialogService,{data:{organizationId:this.organizationId,requestType:"RegularDelete"}});(yield(0,_.n)(i.closed))===L._P.Deleted&&this.router.navigate(["/"])}))}purgeVault(){return F(this,void 0,void 0,(function*(){yield this.modalService.openViewRef(T.$,this.purgeModalRef,(i=>{i.organizationId=this.organizationId}))}))}viewApiKey(){return F(this,void 0,void 0,(function*(){yield this.modalService.openViewRef(x.B,this.apiKeyModalRef,(i=>{i.keyType="organization",i.entityId=this.organizationId,i.postKey=this.organizationApiService.getOrCreateApiKey.bind(this.organizationApiService),i.scope="api.organization",i.grantType="client_credentials",i.apiKeyTitle="apiKey",i.apiKeyWarning="apiKeyWarning",i.apiKeyDescription="apiKeyDesc"}))}))}rotateApiKey(){return F(this,void 0,void 0,(function*(){yield this.modalService.openViewRef(x.B,this.rotateApiKeyModalRef,(i=>{i.keyType="organization",i.isRotation=!0,i.entityId=this.organizationId,i.postKey=this.organizationApiService.rotateApiKey.bind(this.organizationApiService),i.scope="api.organization",i.grantType="client_credentials",i.apiKeyTitle="apiKey",i.apiKeyWarning="apiKeyWarning",i.apiKeyDescription="apiKeyRotateDesc"}))}))}}function ri(i,n){1&i&&(s.TgZ(0,"a",17),s._uU(1),s.ALo(2,"i18n"),s.qZA()),2&i&&(s.xp6(1),s.hij("\n            ",s.lcZ(2,1,"organizationInfo"),"\n          "))}function ui(i,n){1&i&&(s.TgZ(0,"a",18),s._uU(1),s.ALo(2,"i18n"),s.qZA()),2&i&&(s.xp6(1),s.hij("\n            ",s.lcZ(2,1,"policies"),"\n          "))}function ci(i,n){1&i&&(s.TgZ(0,"a",19),s._uU(1),s.ALo(2,"i18n"),s.qZA()),2&i&&(s.xp6(1),s.hij("\n            ",s.lcZ(2,1,"twoStepLogin"),"\n          "))}function li(i,n){1&i&&(s.TgZ(0,"a",20),s._uU(1),s.ALo(2,"i18n"),s.qZA()),2&i&&(s.xp6(1),s.hij("\n            ",s.lcZ(2,1,"importData"),"\n          "))}function si(i,n){1&i&&(s.TgZ(0,"a",21),s._uU(1),s.ALo(2,"i18n"),s.qZA()),2&i&&(s.xp6(1),s.hij("\n            ",s.lcZ(2,1,"exportVault"),"\n          "))}function pi(i,n){1&i&&(s.TgZ(0,"a",22),s._uU(1),s.ALo(2,"i18n"),s.qZA()),2&i&&(s.xp6(1),s.hij("\n            ",s.lcZ(2,1,"domainVerification"),"\n          "))}function gi(i,n){1&i&&(s.TgZ(0,"a",23),s._uU(1),s.ALo(2,"i18n"),s.qZA()),2&i&&(s.xp6(1),s.hij("\n            ",s.lcZ(2,1,"singleSignOn"),"\n          "))}function di(i,n){1&i&&(s.TgZ(0,"a",24),s._uU(1),s.ALo(2,"i18n"),s.qZA()),2&i&&(s.xp6(1),s.hij("\n              ",s.lcZ(2,1,"deviceApprovals"),"\n            "))}function mi(i,n){1&i&&(s.TgZ(0,"a",25),s._uU(1),s.ALo(2,"i18n"),s.qZA()),2&i&&(s.xp6(1),s.hij("\n            ",s.lcZ(2,1,"scim"),"\n          "))}function fi(i,n){if(1&i&&(s.TgZ(0,"div",7),s._uU(1,"\n          "),s.YNc(2,ri,3,3,"a",8),s._uU(3,"\n          "),s.YNc(4,ui,3,3,"a",9),s._uU(5,"\n          "),s.YNc(6,ci,3,3,"a",10),s._uU(7,"\n          "),s.YNc(8,li,3,3,"a",11),s._uU(9,"\n          "),s.YNc(10,si,3,3,"a",12),s._uU(11,"\n          "),s.YNc(12,pi,3,3,"a",13),s._uU(13,"\n          "),s.YNc(14,gi,3,3,"a",14),s._uU(15,"\n          "),s.ynx(16),s._uU(17,"\n            "),s.YNc(18,di,3,3,"a",15),s._uU(19,"\n          "),s.BQk(),s._uU(20,"\n          "),s.YNc(21,mi,3,3,"a",16),s._uU(22,"\n        "),s.qZA()),2&i){const i=n.ngIf;s.xp6(2),s.Q6J("ngIf",i.isOwner),s.xp6(2),s.Q6J("ngIf",i.canManagePolicies),s.xp6(2),s.Q6J("ngIf",i.use2fa&&i.isOwner),s.xp6(2),s.Q6J("ngIf",i.canAccessImportExport),s.xp6(2),s.Q6J("ngIf",i.canAccessImportExport),s.xp6(2),s.Q6J("ngIf",null==i?null:i.canManageDomainVerification),s.xp6(2),s.Q6J("ngIf",i.canManageSso),s.xp6(4),s.Q6J("ngIf",i.canManageDeviceApprovals),s.xp6(3),s.Q6J("ngIf",i.canManageScim)}}ai.ɵfac=function(i){return new(i||ai)(s.Y36(A.Z),s.Y36(I.D),s.Y36(r.gz),s.Y36(q.P),s.Y36(w.$),s.Y36(r.F0),s.Y36(u.Mn),s.Y36(k.M),s.Y36(z.x),s.Y36(p.qu),s.Y36(O.i))},ai.ɵcmp=s.Xpm({type:ai,selectors:[["app-org-account"]],viewQuery:function(i,n){if(1&i&&(s.Gf(R,7,s.s_b),s.Gf(P,7,s.s_b),s.Gf($,7,s.s_b)),2&i){let i;s.iGM(i=s.CRH())&&(n.purgeModalRef=i.first),s.iGM(i=s.CRH())&&(n.apiKeyModalRef=i.first),s.iGM(i=s.CRH())&&(n.rotateApiKeyModalRef=i.first)}},decls:33,vars:15,consts:[["bitTypography","h1",1,"tw-pb-2.5"],[4,"ngIf"],[3,"bitSubmit","formGroup",4,"ngIf"],["type","button","bitButton","","buttonType","danger",3,"click"],["purgeOrganizationTemplate",""],["apiKeyTemplate",""],["rotateApiKeyTemplate",""],["aria-hidden","true",1,"bwi","bwi-spinner","bwi-spin","text-muted",3,"title"],[1,"tw-sr-only"],[3,"bitSubmit","formGroup"],[1,"tw-grid","tw-grid-cols-2","tw-gap-5"],["bitInput","","id","orgName","type","text","formControlName","orgName"],["bitInput","","id","billingEmail","formControlName","billingEmail","type","email"],["bitInput","","id","businessName","formControlName","businessName","type","text"],["size","large",3,"text","id"],[3,"fingerprintMaterial","publicKeyBuffer","fingerprintLabel"],["type","submit","bitButton","","bitFormButton","","buttonType","primary"],["bitTypography","h1",1,"tw-mt-16","tw-pb-2.5"],["href","https://docs.bitwarden.com","target","_blank","rel","noopener"],["type","button","bitButton","","buttonType","secondary",3,"click"],["type","checkbox","bitCheckbox","","formControlName","limitCollectionCreationDeletion"],["type","submit","bitButton","","bitFormButton","","buttonType","primary","id","collectionManagementSubmitButton",4,"ngIf"],["type","checkbox","bitCheckbox","","formControlName","allowAdminAccessToAllCollectionItems"],["type","submit","bitButton","","bitFormButton","","buttonType","primary","id","collectionManagementSubmitButton"]],template:function(i,n){1&i&&(s.TgZ(0,"h1",0),s._uU(1),s.ALo(2,"i18n"),s.qZA(),s._uU(3,"\n"),s.YNc(4,W,9,6,"div",1),s._uU(5,"\n"),s.YNc(6,V,48,21,"form",2),s._uU(7,"\n"),s.YNc(8,H,22,15,"ng-container",1),s._uU(9,"\n"),s.YNc(10,ni,24,15,"form",2),s.ALo(11,"async"),s._uU(12,"\n\n"),s.TgZ(13,"app-danger-zone"),s._uU(14,"\n  "),s.TgZ(15,"button",3),s.NdJ("click",(function(){return n.deleteOrganization()})),s._uU(16),s.ALo(17,"i18n"),s.qZA(),s._uU(18,"\n  "),s.TgZ(19,"button",3),s.NdJ("click",(function(){return n.purgeVault()})),s._uU(20),s.ALo(21,"i18n"),s.qZA(),s._uU(22,"\n"),s.qZA(),s._uU(23,"\n\n"),s.YNc(24,ti,0,0,"ng-template",null,4,s.W1O),s._uU(26,"\n"),s.YNc(27,ei,0,0,"ng-template",null,5,s.W1O),s._uU(29,"\n"),s.YNc(30,oi,0,0,"ng-template",null,6,s.W1O),s._uU(32,"\n")),2&i&&(s.xp6(1),s.Oqu(s.lcZ(2,7,"organizationInfo")),s.xp6(3),s.Q6J("ngIf",n.loading),s.xp6(2),s.Q6J("ngIf",n.org&&!n.loading),s.xp6(2),s.Q6J("ngIf",n.canUseApi),s.xp6(2),s.Q6J("ngIf",n.org&&!n.loading&&s.lcZ(11,9,n.flexibleCollectionsEnabled$)),s.xp6(6),s.hij("\n    ",s.lcZ(17,11,"deleteOrganization"),"\n  "),s.xp6(4),s.hij("\n    ",s.lcZ(21,13,"purgeVault"),"\n  "))},dependencies:[S.O5,p._Y,p.Fj,p.Wl,p.JJ,p.JL,p.sg,p.u,N.b,C.u,Y.A,K.r,M.b,J.d,Q.G,D.A,B.u,j.t,G.q,o.V,S.Ov,E.C],encapsulation:2});class hi{constructor(i,n){this.route=i,this.organizationService=n,this.FeatureFlag=v.T}ngOnInit(){this.organization$=this.route.params.pipe((0,d.w)((i=>this.organizationService.get$(i.organizationId))))}}hi.ɵfac=function(i){return new(i||hi)(s.Y36(r.gz),s.Y36(u.Mn))},hi.ɵcmp=s.Xpm({type:hi,selectors:[["app-org-settings"]],decls:24,vars:6,consts:[[1,"container","page-content"],[1,"row"],[1,"col-3"],[1,"card"],[1,"card-header"],["class","list-group list-group-flush",4,"ngIf"],[1,"col-9"],[1,"list-group","list-group-flush"],["routerLink","account","class","list-group-item","routerLinkActive","active",4,"ngIf"],["routerLink","policies","class","list-group-item","routerLinkActive","active",4,"ngIf"],["routerLink","two-factor","class","list-group-item","routerLinkActive","active",4,"ngIf"],["routerLink","tools/import","class","list-group-item","routerLinkActive","active",4,"ngIf"],["routerLink","tools/export","class","list-group-item","routerLinkActive","active",4,"ngIf"],["routerLink","domain-verification","class","list-group-item","routerLinkActive","active",4,"ngIf"],["routerLink","sso","class","list-group-item","routerLinkActive","active",4,"ngIf"],["routerLink","device-approvals","class","list-group-item","routerLinkActive","active",4,"ngIf"],["routerLink","scim","class","list-group-item","routerLinkActive","active",4,"ngIf"],["routerLink","account","routerLinkActive","active",1,"list-group-item"],["routerLink","policies","routerLinkActive","active",1,"list-group-item"],["routerLink","two-factor","routerLinkActive","active",1,"list-group-item"],["routerLink","tools/import","routerLinkActive","active",1,"list-group-item"],["routerLink","tools/export","routerLinkActive","active",1,"list-group-item"],["routerLink","domain-verification","routerLinkActive","active",1,"list-group-item"],["routerLink","sso","routerLinkActive","active",1,"list-group-item"],["routerLink","device-approvals","routerLinkActive","active",1,"list-group-item"],["routerLink","scim","routerLinkActive","active",1,"list-group-item"]],template:function(i,n){1&i&&(s.TgZ(0,"div",0),s._uU(1,"\n  "),s.TgZ(2,"div",1),s._uU(3,"\n    "),s.TgZ(4,"div",2),s._uU(5,"\n      "),s.TgZ(6,"div",3),s._uU(7,"\n        "),s.TgZ(8,"div",4),s._uU(9),s.ALo(10,"i18n"),s.qZA(),s._uU(11,"\n        "),s.YNc(12,fi,23,9,"div",5),s.ALo(13,"async"),s._uU(14,"\n      "),s.qZA(),s._uU(15,"\n    "),s.qZA(),s._uU(16,"\n    "),s.TgZ(17,"div",6),s._uU(18,"\n      "),s._UZ(19,"router-outlet"),s._uU(20,"\n    "),s.qZA(),s._uU(21,"\n  "),s.qZA(),s._uU(22,"\n"),s.qZA(),s._uU(23,"\n")),2&i&&(s.xp6(9),s.Oqu(s.lcZ(10,2,"settings")),s.xp6(3),s.Q6J("ngIf",s.lcZ(13,4,n.organization$)))},dependencies:[S.O5,r.lC,r.rH,r.Od,S.Ov,E.C],encapsulation:2});var Zi=t(59157),_i=t(80060),Ai=t(48103),Ui=t(41648),bi=t(62941),vi=t(55602),yi=t(34961),xi=t(83924),Ti=t(58172),Li=t(24083),Ii=t(55039),qi=function(i,n,t,e){return new(t||(t=Promise))((function(o,a){function r(i){try{c(e.next(i))}catch(n){a(n)}}function u(i){try{c(e.throw(i))}catch(n){a(n)}}function c(i){var n;i.done?o(i.value):(n=i.value,n instanceof t?n:new t((function(i){i(n)}))).then(r,u)}c((e=e.apply(i,n||[])).next())}))};function wi(i,n){1&i&&(s.TgZ(0,"h1"),s._uU(1),s.ALo(2,"i18n"),s.qZA()),2&i&&(s.xp6(1),s.Oqu(s.lcZ(2,1,"twoStepLogin")))}function ki(i,n){1&i&&(s.TgZ(0,"h1"),s._uU(1),s.ALo(2,"i18n"),s.qZA()),2&i&&(s.xp6(1),s.Oqu(s.lcZ(2,1,"twoStepLoginEnforcement")))}function zi(i,n){1&i&&(s.TgZ(0,"p"),s._uU(1),s.ALo(2,"i18n"),s.qZA()),2&i&&(s.xp6(1),s.Oqu(s.lcZ(2,1,"twoStepLoginDesc")))}function Oi(i,n){1&i&&(s.ynx(0),s._uU(1),s.ALo(2,"i18n"),s.TgZ(3,"a",13),s._uU(4),s.ALo(5,"i18n"),s.qZA(),s._uU(6,"\n      "),s._UZ(7,"br"),s._uU(8),s.ALo(9,"i18n"),s._UZ(10,"br"),s._uU(11,"\n      "),s._UZ(12,"br"),s._uU(13,"\n      "),s.TgZ(14,"p"),s._uU(15),s.ALo(16,"i18n"),s.qZA(),s._uU(17,"\n    "),s.BQk()),2&i&&(s.xp6(1),s.hij("\n      ",s.lcZ(2,4,"twoStepLoginEnterpriseDescStart"),"\n      "),s.xp6(3),s.hij("",s.lcZ(5,6,"twoStepLoginPolicy"),"."),s.xp6(4),s.hij("\n      ",s.lcZ(9,8,"twoStepLoginOrganizationDuoDesc"),"\n      "),s.xp6(7),s.Oqu(s.lcZ(16,10,"twoStepLoginOrganizationSsoDesc")))}function Si(i,n){1&i&&(s._uU(0),s.ALo(1,"i18n"),s._UZ(2,"br"),s._uU(3),s.ALo(4,"i18n")),2&i&&(s.hij("\n      ",s.lcZ(1,2,"twoStepLoginTeamsDesc"),"\n      "),s.xp6(3),s.hij("\n      ",s.lcZ(4,4,"twoStepLoginOrganizationDuoDesc"),"\n    "))}function Ni(i,n){if(1&i&&(s.ynx(0),s._uU(1,"\n  "),s.TgZ(2,"p"),s._uU(3,"\n    "),s.YNc(4,Oi,18,12,"ng-container",11),s._uU(5,"\n    "),s.YNc(6,Si,5,6,"ng-template",null,12,s.W1O),s._uU(8,"\n  "),s.qZA(),s._uU(9,"\n"),s.BQk()),2&i){const i=s.MAs(7),n=s.oxw();s.xp6(4),s.Q6J("ngIf",n.isEnterpriseOrg)("ngIfElse",i)}}function Ci(i,n){if(1&i){const i=s.EpF();s.TgZ(0,"bit-callout",14),s._uU(1,"\n  "),s.TgZ(2,"p"),s._uU(3),s.ALo(4,"i18n"),s.qZA(),s._uU(5,"\n  "),s.TgZ(6,"button",15),s.NdJ("click",(function(){s.CHM(i);const n=s.oxw();return s.KtG(n.recoveryCode())})),s._uU(7),s.ALo(8,"i18n"),s.qZA(),s._uU(9,"\n"),s.qZA()}2&i&&(s.xp6(3),s.Oqu(s.lcZ(4,2,"twoStepLoginRecoveryWarning")),s.xp6(4),s.hij("\n    ",s.lcZ(8,4,"viewRecoveryCode"),"\n  "))}function Yi(i,n){1&i&&(s.TgZ(0,"small"),s._uU(1,"\n    "),s._UZ(2,"i",16),s.ALo(3,"i18n"),s._uU(4,"\n    "),s.TgZ(5,"span",17),s._uU(6),s.ALo(7,"i18n"),s.qZA(),s._uU(8,"\n  "),s.qZA()),2&i&&(s.xp6(2),s.s9C("title",s.lcZ(3,2,"loading")),s.xp6(4),s.Oqu(s.lcZ(7,4,"loading")))}function Ki(i,n){1&i&&(s.TgZ(0,"bit-callout",14),s._uU(1),s.ALo(2,"i18n"),s.qZA()),2&i&&(s.xp6(1),s.hij("\n  ",s.lcZ(2,1,"twoStepLoginPolicyUserWarning"),"\n"))}function Mi(i,n){1&i&&(s.ynx(0),s._uU(1,"\n          "),s._UZ(2,"i",25),s.ALo(3,"i18n"),s._uU(4,"\n          "),s.TgZ(5,"span",17),s._uU(6),s.ALo(7,"i18n"),s.qZA(),s._uU(8,"\n        "),s.BQk()),2&i&&(s.xp6(2),s.s9C("title",s.lcZ(3,2,"enabled")),s.xp6(4),s.Oqu(s.lcZ(7,4,"enabled")))}function Ji(i,n){1&i&&s._UZ(0,"app-premium-badge")}function Qi(i,n){if(1&i){const i=s.EpF();s.TgZ(0,"li",18),s._uU(1,"\n    "),s.TgZ(2,"div",19),s._uU(3,"\n      "),s._UZ(4,"img",20),s._uU(5,"\n    "),s.qZA(),s._uU(6,"\n    "),s.TgZ(7,"div",21),s._uU(8,"\n      "),s.TgZ(9,"h3",22),s._uU(10),s.YNc(11,Mi,9,6,"ng-container",1),s._uU(12,"\n        "),s.YNc(13,Ji,1,0,"app-premium-badge",1),s._uU(14,"\n      "),s.qZA(),s._uU(15),s.qZA(),s._uU(16,"\n    "),s.TgZ(17,"div",23),s._uU(18,"\n      "),s.TgZ(19,"button",24),s.NdJ("click",(function(){const n=s.CHM(i).$implicit,t=s.oxw();return s.KtG(t.manage(n.type))})),s._uU(20),s.ALo(21,"i18n"),s.qZA(),s._uU(22,"\n    "),s.qZA(),s._uU(23,"\n  "),s.qZA()}if(2&i){const i=n.$implicit,t=s.oxw();s.xp6(4),s.Tol("mfaType"+i.type),s.Q6J("alt",i.name+" logo"),s.xp6(6),s.hij("\n        ",i.name,"\n        "),s.xp6(1),s.Q6J("ngIf",i.enabled),s.xp6(2),s.Q6J("ngIf",i.premium),s.xp6(2),s.hij("\n      ",i.description,"\n    "),s.xp6(4),s.Q6J("disabled",!t.canAccessPremium&&i.premium),s.xp6(1),s.hij("\n        ",s.lcZ(21,9,"manage"),"\n      ")}}function Di(i,n){}function Bi(i,n){}function ji(i,n){}function Gi(i,n){}function Ei(i,n){}function Fi(i,n){}const Ri=function(i){return{"mt-5":i}};class Pi extends bi.x{constructor(i,n,t,e,o,a,r){super(i,n,t,e,a),this.route=o,this.organizationService=r,this.tabbedHeader=!1}ngOnInit(){const i=Object.create(null,{ngOnInit:{get:()=>super.ngOnInit}});return qi(this,void 0,void 0,(function*(){this.route.params.pipe((0,_i.b)((i=>{this.organizationId=i.organizationId,this.organization=this.organizationService.get(this.organizationId)})),(0,Zi.b)((()=>qi(this,void 0,void 0,(function*(){return yield i.ngOnInit.call(this)})))),(0,Z.R)(this.destroy$)).subscribe()}))}manage(i){return qi(this,void 0,void 0,(function*(){switch(i){case Ai.L.OrganizationDuo:{const i=yield this.openModal(this.duoModalRef,Ui.C);i.type=Ai.L.OrganizationDuo,i.organizationId=this.organizationId,i.onUpdated.pipe((0,Z.R)(this.destroy$)).subscribe((i=>{this.updateStatus(i,Ai.L.OrganizationDuo)}));break}}}))}getTwoFactorProviders(){return this.apiService.getTwoFactorOrganizationProviders(this.organizationId)}filterProvider(i){return i!==Ai.L.OrganizationDuo}}Pi.ɵfac=function(i){return new(i||Pi)(s.Y36(vi.s),s.Y36(A.Z),s.Y36(yi.o),s.Y36(xi.d),s.Y36(r.gz),s.Y36(Ti.b),s.Y36(u.Mn))},Pi.ɵcmp=s.Xpm({type:Pi,selectors:[["app-two-factor-setup"]],features:[s.qOj],decls:44,vars:15,consts:[[3,"ngClass"],[4,"ngIf"],["type","warning",4,"ngIf"],[1,"list-group","list-group-2fa"],["class","list-group-item d-flex align-items-center",4,"ngFor","ngForOf"],["authenticatorTemplate",""],["recoveryTemplate",""],["duoTemplate",""],["emailTemplate",""],["yubikeyTemplate",""],["webAuthnTemplate",""],[4,"ngIf","ngIfElse"],["teamsDescription",""],["routerLink","../policies"],["type","warning"],["type","button","bitButton","","buttonType","secondary",3,"click"],["aria-hidden","true",1,"bwi","bwi-spinner","bwi-spin","bwi-fw","text-muted",3,"title"],[1,"sr-only"],[1,"list-group-item","d-flex","align-items-center"],[1,"logo-2fa","d-flex","justify-content-center"],[3,"alt"],[1,"mx-4"],[1,"mb-0"],[1,"ml-auto"],["type","button","bitButton","","buttonType","secondary",3,"disabled","click"],["aria-hidden","true",1,"bwi","bwi-check","text-success","bwi-fw",3,"title"]],template:function(i,n){1&i&&(s.TgZ(0,"div",0),s._uU(1,"\n  "),s.YNc(2,wi,3,3,"h1",1),s._uU(3,"\n  "),s.YNc(4,ki,3,3,"h1",1),s._uU(5,"\n"),s.qZA(),s._uU(6,"\n"),s.YNc(7,zi,3,3,"p",1),s._uU(8,"\n"),s.YNc(9,Ni,10,2,"ng-container",1),s._uU(10,"\n"),s.YNc(11,Ci,10,6,"bit-callout",2),s._uU(12,"\n"),s.TgZ(13,"h2",0),s._uU(14),s.ALo(15,"i18n"),s.YNc(16,Yi,9,6,"small",1),s._uU(17,"\n"),s.qZA(),s._uU(18,"\n"),s.YNc(19,Ki,3,3,"bit-callout",2),s._uU(20,"\n"),s.TgZ(21,"ul",3),s._uU(22,"\n  "),s.YNc(23,Qi,24,11,"li",4),s._uU(24,"\n"),s.qZA(),s._uU(25,"\n\n"),s.YNc(26,Di,0,0,"ng-template",null,5,s.W1O),s._uU(28,"\n"),s.YNc(29,Bi,0,0,"ng-template",null,6,s.W1O),s._uU(31,"\n"),s.YNc(32,ji,0,0,"ng-template",null,7,s.W1O),s._uU(34,"\n"),s.YNc(35,Gi,0,0,"ng-template",null,8,s.W1O),s._uU(37,"\n"),s.YNc(38,Ei,0,0,"ng-template",null,9,s.W1O),s._uU(40,"\n"),s.YNc(41,Fi,0,0,"ng-template",null,10,s.W1O),s._uU(43,"\n")),2&i&&(s.Q6J("ngClass",n.tabbedHeader?"tabbed-header":"page-header"),s.xp6(2),s.Q6J("ngIf",!n.organizationId||!n.isEnterpriseOrg),s.xp6(2),s.Q6J("ngIf",n.organizationId&&n.isEnterpriseOrg),s.xp6(3),s.Q6J("ngIf",!n.organizationId),s.xp6(2),s.Q6J("ngIf",n.organizationId),s.xp6(2),s.Q6J("ngIf",!n.organizationId),s.xp6(2),s.Q6J("ngClass",s.VKq(13,Ri,!n.organizationId)),s.xp6(1),s.hij("\n  ",s.lcZ(15,11,"providers"),"\n  "),s.xp6(2),s.Q6J("ngIf",n.loading),s.xp6(3),s.Q6J("ngIf",n.showPolicyWarning),s.xp6(4),s.Q6J("ngForOf",n.providers))},dependencies:[S.mk,S.sg,S.O5,r.rH,K.r,Li.O,Ii.R,E.C],encapsulation:2});const $i=[{path:"",component:hi,canActivate:[c.G],data:{organizationPermissions:u.DL},children:[{path:"",pathMatch:"full",canActivate:[l.S],data:{autoRedirectCallback:function(i){if(i.isOwner)return"account";if(i.canManagePolicies)return"policies";if(i.canAccessImportExport)return["tools","import"];if(i.canManageSso)return"sso";if(i.canManageScim)return"scim";if(i.canManageDeviceApprovals)return"device-approvals";return}},children:[]},{path:"account",component:ai,data:{titleId:"organizationInfo"}},{path:"two-factor",component:Pi,data:{titleId:"twoStepLogin"}},{path:"policies",component:a.K,canActivate:[c.G],data:{organizationPermissions:i=>i.canManagePolicies,titleId:"policies"}},{path:"tools",children:[{path:"import",loadComponent:()=>Promise.all([t.e(395),t.e(677)]).then(t.bind(t,59211)).then((i=>i.ImportWebComponent)),canActivate:[c.G],data:{titleId:"importData",organizationPermissions:i=>i.canAccessImportExport}},{path:"export",loadChildren:()=>Promise.all([t.e(111),t.e(74)]).then(t.bind(t,51074)).then((i=>i.OrganizationVaultExportModule))}]}]}];class Wi{}Wi.ɵfac=function(i){return new(i||Wi)},Wi.ɵmod=s.oAB({type:Wi}),Wi.ɵinj=s.cJS({imports:[r.Bz.forChild($i),r.Bz]});class Vi{}Vi.ɵfac=function(i){return new(i||Vi)},Vi.ɵmod=s.oAB({type:Vi}),Vi.ɵinj=s.cJS({imports:[e.m,e.f,a.I2,Wi,o.V]})}}]);
//# sourceMappingURL=182.bd99dac914b18e447d2a.js.map
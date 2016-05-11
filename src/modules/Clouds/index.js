import { Module } from 'reductor';
import CloudsContainer from './CloudsContainer.jsx';
import CloudContainer from './CloudContainer.jsx';
import NewCloudContainer from './NewCloudContainer.jsx';
import ImagesContainer from './ImagesContainer.jsx';
import SelectedImageContainer from './SelectedImageContainer.jsx';
import TenantsContainer from './TenantsContainer.jsx';
import SelectedTenantContainer from './SelectedTenantContainer.jsx';
import NewImageContainer from './NewImageContainer.jsx';
import {
  InitClouds, InitCloud, CreateCloud, UpdateCloud, DeleteCloud, TestCloud,
  CreateImage, DeleteImage, InitImages, InitSelectedImage, RebuildImage, InitApps,
  CreateTenant, DeleteTenant, InitTenants, InitSelectedTenant, UpdateTenant,
  InitBootableImages, InitStorageSystems,
} from './actions';
import { InitConnectors } from '../Connectors/actions/';

const CloudsModule = new Module();

CloudsModule
  .name('Clouds')
  .version('1.0.0');

CloudsModule
  .setInitialState({
    initialized: false,
    clouds: [],
    cloud: {},
    images: [],
    image: {},
    tenants: [],
    tenant: {},
    connectors: [],
    apps: [],
    success: false,
    bootableImages: [],
    storageSystems: [],
  });

CloudsModule
  .component('CloudsContainer', CloudsContainer)
  .component('CloudContainer', CloudContainer)
  .component('NewCloudContainer', NewCloudContainer)
  .component('ImagesContainer', ImagesContainer)
  .component('TenantsContainer', TenantsContainer)
  .component('SelectedImageContainer', SelectedImageContainer)
  .component('SelectedTenantContainer', SelectedTenantContainer)
  .component('NewImageContainer', NewImageContainer);

CloudsModule
  .on(InitClouds.Action, InitClouds.Reducer, InitClouds.PayloadCreator)
  .on(InitCloud.Action, InitCloud.Reducer, InitCloud.PayloadCreator)
  .on(CreateCloud.Action, CreateCloud.Reducer, CreateCloud.PayloadCreator)
  .on(DeleteCloud.Action, DeleteCloud.Reducer, DeleteCloud.PayloadCreator)
  .on(TestCloud.Action, TestCloud.Reducer, TestCloud.PayloadCreator)
  .on(InitConnectors.Action, InitConnectors.Reducer, InitConnectors.PayloadCreator)
  .on(UpdateCloud.Action, UpdateCloud.Reducer, UpdateCloud.PayloadCreator)
  .on(InitImages.Action, InitImages.Reducer, InitImages.PayloadCreator)
  .on(InitSelectedImage.Action, InitSelectedImage.Reducer, InitSelectedImage.PayloadCreator)
  .on(CreateImage.Action, CreateImage.Reducer, CreateImage.PayloadCreator)
  .on(DeleteImage.Action, DeleteImage.Reducer, DeleteImage.PayloadCreator)
  .on(RebuildImage.Action, RebuildImage.Reducer, RebuildImage.PayloadCreator)
  .on(CreateTenant.Action, CreateTenant.Reducer, CreateTenant.PayloadCreator)
  .on(InitTenants.Action, InitTenants.Reducer, InitTenants.PayloadCreator)
  .on(InitSelectedTenant.Action, InitSelectedTenant.Reducer, InitSelectedTenant.PayloadCreator)
  .on(UpdateTenant.Action, UpdateTenant.Reducer, UpdateTenant.PayloadCreator)
  .on(DeleteTenant.Action, DeleteTenant.Reducer, DeleteTenant.PayloadCreator)
  .on(InitApps.Action, InitApps.Reducer, InitApps.PayloadCreator)
  .on(InitBootableImages.Action, InitBootableImages.Reducer, InitBootableImages.PayloadCreator)
  .on(InitStorageSystems.Action, InitStorageSystems.Reducer, InitStorageSystems.PayloadCreator);

export default CloudsModule;

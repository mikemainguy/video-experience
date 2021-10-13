import { hasExpectedRequestMetadata } from '@reduxjs/toolkit/dist/matchers';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createSerializer } from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });
hasExpectedRequestMetadata.addSnapshotSerializer( createSerializer({ mode: 'deep' }) );
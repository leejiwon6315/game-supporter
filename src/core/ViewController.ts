import { ViewModel } from './ViewModel';

export type ViewControllerProps<VM extends ViewModel<any>> = { viewModel: VM };

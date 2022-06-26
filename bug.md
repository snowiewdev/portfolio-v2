<--- Last few GCs --->

[16380:0000023849DCC820] 19144723 ms: Mark-sweep 4026.9 (4141.6) -> 4011.1
(4141.1) MB, 3649.9 / 0.0 ms (average mu = 0.087, current mu = 0.005) allocation failure scavenge might not succeed
[16380:0000023849DCC820] 19148544 ms: Mark-sweep 4026.9 (4141.1) -> 4011.2
(4141.3) MB, 3799.2 / 0.1 ms (average mu = 0.047, current mu = 0.006) allocation failure scavenge might not succeed

<--- JS stacktrace --->

FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed -
JavaScript heap out of memory
1: 00007FF7BC01013F v8::internal::CodeObjectRegistry::~CodeObjectRegistry+112495
2: 00007FF7BBF9F396 DSA_meth_get_flags+65526
3: 00007FF7BBFA024D node::OnFatalError+301
4: 00007FF7BC8D19EE v8::Isolate::ReportExternalAllocationLimitReached+94  
 5: 00007FF7BC8BBECD v8::SharedArrayBuffer::Externalize+781
6: 00007FF7BC75F61C v8::internal::Heap::EphemeronKeyWriteBarrierFromCode+1468
7: 00007FF7BC76C2C9 v8::internal::Heap::PublishPendingAllocations+1129  
 8: 00007FF7BC76929A v8::internal::Heap::PageFlagsAreConsistent+2842  
 9: 00007FF7BC75BF19 v8::internal::Heap::CollectGarbage+2137
10: 00007FF7BC75A0D0 v8::internal::Heap::AllocateExternalBackingStore+2000
11: 00007FF7BC777D40 v8::internal::FreeListManyCached::Reset+1408
12: 00007FF7BC7783F5 v8::internal::Factory::AllocateRaw+37
13: 00007FF7BC78A0EE v8::internal::FactoryBase<v8::internal::Factory>::AllocateRawArray+46
14: 00007FF7BC78CD4A v8::internal::FactoryBase<v8::internal::Factory>::NewFixedArrayWithFiller+74
15: 00007FF7BC78CC6D v8::internal::FactoryBase<v8::internal::Factory>::NewFixedArray+77
16: 00007FF7BC635E93 v8::internal::FeedbackNexus::ic_state+61251
17: 00007FF7BC62E2C7 v8::internal::FeedbackNexus::ic_state+29559
18: 00007FF7BC629372 v8::internal::FeedbackNexus::ic_state+9250
19: 00007FF7BC5DC2F4 v8::internal::JSObject::AddDataElement+1092
20: 00007FF7BC59B58B v8::internal::StringSet::Add+1835
21: 00007FF7BC5DD8DA v8::internal::JSObject::DefineAccessor+858
22: 00007FF7BC4AB1D2 v8::internal::Runtime::GetObjectProperty+19010  
23: 00007FF7BC95F3E1 v8::internal::SetupIsolateDelegate::SetupHeap+494417  
24: 00007FF7BC99ED43 v8::internal::SetupIsolateDelegate::SetupHeap+754867  
25: 000002384C5E9640

<--- Last few GCs --->

[29132:000001E456B98820] 17352560 ms: Mark-sweep 4032.1 (4138.9) -> 4016.7
(4139.2) MB, 4278.7 / 0.0 ms (average mu = 0.098, current mu = 0.023) allocation failure scavenge might not succeed
[29132:000001E456B98820] 17356638 ms: Mark-sweep 4033.0 (4139.4) -> 4019.3
(4142.4) MB, 3909.9 / 0.1 ms (average mu = 0.071, current mu = 0.041) allocation failure scavenge might not succeed

<--- JS stacktrace --->

FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed -
JavaScript heap out of memory
1: 00007FF7BC01013F v8::internal::CodeObjectRegistry::~CodeObjectRegistry+112495
2: 00007FF7BBF9F396 DSA_meth_get_flags+65526
3: 00007FF7BBFA024D node::OnFatalError+301
4: 00007FF7BC8D19EE v8::Isolate::ReportExternalAllocationLimitReached+94  
 5: 00007FF7BC8BBECD v8::SharedArrayBuffer::Externalize+781
6: 00007FF7BC75F61C v8::internal::Heap::EphemeronKeyWriteBarrierFromCode+1468
7: 00007FF7BC76C2C9 v8::internal::Heap::PublishPendingAllocations+1129  
 8: 00007FF7BC76929A v8::internal::Heap::PageFlagsAreConsistent+2842  
 9: 00007FF7BC75BF19 v8::internal::Heap::CollectGarbage+2137
10: 00007FF7BC75A0D0 v8::internal::Heap::AllocateExternalBackingStore+2000
11: 00007FF7BC777D40 v8::internal::FreeListManyCached::Reset+1408
12: 00007FF7BC7783F5 v8::internal::Factory::AllocateRaw+37
13: 00007FF7BC78A0EE v8::internal::FactoryBase<v8::internal::Factory>::AllocateRawArray+46
14: 00007FF7BC78CD4A v8::internal::FactoryBase<v8::internal::Factory>::NewFixedArrayWithFiller+74
15: 00007FF7BC78CC6D v8::internal::FactoryBase<v8::internal::Factory>::NewFixedArray+77
16: 00007FF7BC5E0348 v8::internal::JSReceiver::DeletePropertyOrElement+495217: 00007FF7BC5E231B v8::internal::JSReceiver::GetOwnPropertyDescriptor+89118: 00007FF7BC5E1F92 v8::internal::JSReceiver::GetOrCreateIdentityHash+258
19: 00007FF7BC4A9E99 v8::internal::Runtime::GetObjectProperty+14089  
20: 00007FF7BC95F3E1 v8::internal::SetupIsolateDelegate::SetupHeap+494417
21: 00007FF7BC945671 v8::internal::SetupIsolateDelegate::SetupHeap+388577  
22: 000001E459485848

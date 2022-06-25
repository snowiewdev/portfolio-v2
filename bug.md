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

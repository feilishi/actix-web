(function() {var implementors = {};
implementors["actix_http"] = [{"text":"impl&lt;B&gt; <a class=\"trait\" href=\"https://docs.rs/pin-project/0.4.19/pin_project/trait.UnsafeUnpin.html\" title=\"trait pin_project::UnsafeUnpin\">UnsafeUnpin</a> for <a class=\"enum\" href=\"actix_http/body/enum.ResponseBody.html\" title=\"enum actix_http::body::ResponseBody\">ResponseBody</a>&lt;B&gt;","synthetic":false,"types":["actix_http::body::ResponseBody"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/pin-project/0.4.19/pin_project/trait.UnsafeUnpin.html\" title=\"trait pin_project::UnsafeUnpin\">UnsafeUnpin</a> for <a class=\"enum\" href=\"actix_http/body/enum.Body.html\" title=\"enum actix_http::body::Body\">Body</a>","synthetic":false,"types":["actix_http::body::Body"]},{"text":"impl&lt;S:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>, E&gt; <a class=\"trait\" href=\"https://docs.rs/pin-project/0.4.19/pin_project/trait.UnsafeUnpin.html\" title=\"trait pin_project::UnsafeUnpin\">UnsafeUnpin</a> for <a class=\"struct\" href=\"actix_http/body/struct.BodyStream.html\" title=\"struct actix_http::body::BodyStream\">BodyStream</a>&lt;S, E&gt;","synthetic":false,"types":["actix_http::body::BodyStream"]},{"text":"impl&lt;S:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>&gt; <a class=\"trait\" href=\"https://docs.rs/pin-project/0.4.19/pin_project/trait.UnsafeUnpin.html\" title=\"trait pin_project::UnsafeUnpin\">UnsafeUnpin</a> for <a class=\"struct\" href=\"actix_http/body/struct.SizedStream.html\" title=\"struct actix_http::body::SizedStream\">SizedStream</a>&lt;S&gt;","synthetic":false,"types":["actix_http::body::SizedStream"]},{"text":"impl&lt;B&gt; <a class=\"trait\" href=\"https://docs.rs/pin-project/0.4.19/pin_project/trait.UnsafeUnpin.html\" title=\"trait pin_project::UnsafeUnpin\">UnsafeUnpin</a> for <a class=\"struct\" href=\"actix_http/encoding/struct.Encoder.html\" title=\"struct actix_http::encoding::Encoder\">Encoder</a>&lt;B&gt;","synthetic":false,"types":["actix_http::encoding::encoder::Encoder"]},{"text":"impl&lt;T, S, B, X, U&gt; <a class=\"trait\" href=\"https://docs.rs/pin-project/0.4.19/pin_project/trait.UnsafeUnpin.html\" title=\"trait pin_project::UnsafeUnpin\">UnsafeUnpin</a> for <a class=\"struct\" href=\"actix_http/h1/struct.Dispatcher.html\" title=\"struct actix_http::h1::Dispatcher\">Dispatcher</a>&lt;T, S, B, X, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Service&lt;Request = <a class=\"struct\" href=\"actix_http/struct.Request.html\" title=\"struct actix_http::Request\">Request</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::Error: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"actix_http/error/struct.Error.html\" title=\"struct actix_http::error::Error\">Error</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"actix_http/body/trait.MessageBody.html\" title=\"trait actix_http::body::MessageBody\">MessageBody</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;X: Service&lt;Request = <a class=\"struct\" href=\"actix_http/struct.Request.html\" title=\"struct actix_http::Request\">Request</a>, Response = <a class=\"struct\" href=\"actix_http/struct.Request.html\" title=\"struct actix_http::Request\">Request</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;X::Error: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"actix_http/error/struct.Error.html\" title=\"struct actix_http::error::Error\">Error</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: Service&lt;Request = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a><a class=\"struct\" href=\"actix_http/struct.Request.html\" title=\"struct actix_http::Request\">Request</a>, Framed&lt;T, <a class=\"struct\" href=\"actix_http/h1/struct.Codec.html\" title=\"struct actix_http::h1::Codec\">Codec</a>&gt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>, Response = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;U::Error: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a>,&nbsp;</span>","synthetic":false,"types":["actix_http::h1::dispatcher::Dispatcher"]},{"text":"impl&lt;T, B&gt; <a class=\"trait\" href=\"https://docs.rs/pin-project/0.4.19/pin_project/trait.UnsafeUnpin.html\" title=\"trait pin_project::UnsafeUnpin\">UnsafeUnpin</a> for <a class=\"struct\" href=\"actix_http/h1/struct.SendResponse.html\" title=\"struct actix_http::h1::SendResponse\">SendResponse</a>&lt;T, B&gt;","synthetic":false,"types":["actix_http::h1::utils::SendResponse"]},{"text":"impl&lt;T, S:&nbsp;Service&lt;Request = <a class=\"struct\" href=\"actix_http/struct.Request.html\" title=\"struct actix_http::Request\">Request</a>&gt;, B:&nbsp;<a class=\"trait\" href=\"actix_http/body/trait.MessageBody.html\" title=\"trait actix_http::body::MessageBody\">MessageBody</a>&gt; <a class=\"trait\" href=\"https://docs.rs/pin-project/0.4.19/pin_project/trait.UnsafeUnpin.html\" title=\"trait pin_project::UnsafeUnpin\">UnsafeUnpin</a> for <a class=\"struct\" href=\"actix_http/h2/struct.Dispatcher.html\" title=\"struct actix_http::h2::Dispatcher\">Dispatcher</a>&lt;T, S, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://docs.rs/tokio/0.2.21/tokio/io/async_read/trait.AsyncRead.html\" title=\"trait tokio::io::async_read::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"https://docs.rs/tokio/0.2.21/tokio/io/async_write/trait.AsyncWrite.html\" title=\"trait tokio::io::async_write::AsyncWrite\">AsyncWrite</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":false,"types":["actix_http::h2::dispatcher::Dispatcher"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()
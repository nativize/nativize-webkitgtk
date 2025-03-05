#include <gtk/gtk.h>
#include <webkit/webkit.h>

static void activate(GtkApplication *app, gpointer user_data)
{
	// Create main window
	GtkWidget *main_window = gtk_application_window_new(app);
	gtk_window_set_default_size(GTK_WINDOW(main_window), 800, 600);

	// Create WebKit WebView
	WebKitWebView *web_view = WEBKIT_WEB_VIEW(webkit_web_view_new());
	gtk_window_set_child(GTK_WINDOW(main_window), GTK_WIDGET(web_view));

	// Load URL
	webkit_web_view_load_uri(web_view, "https://github.com/nativize");

	// Show the window
	gtk_window_present(GTK_WINDOW(main_window));
}

int main(int argc, char **argv)
{
    //TODO: we may pass identifier  here...
	GtkApplication *app = gtk_application_new("com.example.WebKitGTK6App", G_APPLICATION_DEFAULT_FLAGS);
	g_signal_connect(app, "activate", G_CALLBACK(activate), NULL);
	int status = g_application_run(G_APPLICATION(app), argc, argv);
	g_object_unref(app);

	return status;
}
